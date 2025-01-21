import React from "react";
import TitleSection from "../../components/TitleSection/TitleSection";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

// TODO: publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const PaymentPage = () => {
  return (
    <div>
      <div className="my-10">
        <TitleSection
          heading={"Payment Here Safely"}
          subHeading={"Pay Now"}></TitleSection>
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default PaymentPage;
