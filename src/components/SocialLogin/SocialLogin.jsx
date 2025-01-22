import React from "react";
import logo from "../../assets/ImagesHome/google.png";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      // console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        photo: result.user?.photoURL,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        // console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div>
      <div className="p-2">
        <button onClick={handleGoogleSignIn} className="btn btn-info">
          {" "}
          <img className="w-6" src={logo} alt="" /> Google SignIn
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
