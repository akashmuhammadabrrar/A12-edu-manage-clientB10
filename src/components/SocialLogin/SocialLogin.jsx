import React from "react";
import logo from "../../assets/ImagesHome/google.png";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      navigate("/");
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
