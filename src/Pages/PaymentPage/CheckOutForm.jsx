import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckOutForm = () => {
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();
  const stripe = useStripe();
  const axiosSecure = useAxiosSecure();
  const elements = useElements();

  const location = useLocation();
  const { classDetail } = location.state || {};

  const price = parseInt(classDetail.price);
  console.log(classDetail, "class details");
  console.log(price);

  useEffect(() => {
    if (classDetail && price > 0) {
      axiosSecure
        .post(`/create-payment-intent/${classDetail?._id}`, {
          price: price * 100,
        })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error.message, "payment error");
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Anonymous",
            name: user?.displayName || "Anonymous,",
          },
        },
      });
    if (confirmError) {
      console.log("confirmError");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log(paymentIntent.id, "Transaction Id");
        setTransactionId(paymentIntent.id);
        Swal.fire({
          title: "Success!",
          text: "Payment Successful",
          icon: "success",
        });
        navigate("/dashboard/myEnroll");

        // now save the payment in the data base
        const payment = {
          email: user?.email,
          price: price,
          transactionId: paymentIntent.id,
          date: new Date(),
          myClass: classDetail,
        };
        const res = await axiosSecure.post("/payments", payment);
        console.log(res.data, "payment saved");
      }
    }
  };

  return (
    <div className="w-2/3 mx-auto">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-info my-8"
          type="submit"
          disabled={!stripe || !clientSecret}>
          Click To Pay
        </button>
        <p className="text-red-600 text-xl font-bold">{error}</p>
        {transactionId && (
          <p className="text-green-600 text-xl font-bold">
            Your Transaction Id: {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckOutForm;
