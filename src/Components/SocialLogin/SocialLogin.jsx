import React, { useState } from "react";
import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";


const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");


  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
        setError("");
        toast.success("Successfully login!");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="divider text-white">Social Media Login</div>
      <div className="text-center flex justify-center gap-8">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-warning border-0 border-b-4 mt-4    rounded shadow-xl bg-opacity-30 hover:scale-110 text-3xl"
        >
          <FaGoogle></FaGoogle>
        </button>
        <button className="btn btn-outline btn-warning border-0 border-b-4 mt-4   rounded shadow-xl bg-opacity-30 text-3xl hover:scale-110">
          <FaFacebook></FaFacebook>
        </button>
        <button className="btn btn-outline btn-warning border-0 border-b-4 mt-4   rounded shadow-xl bg-opacity-30 text-3xl hover:scale-110">
          <FaGithub></FaGithub>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
