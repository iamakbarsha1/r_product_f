import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import loginGif from "../../assests/login/loginGif.gif";
import loginGifJSON from "../../assests/login/loginGifJSON.json";
import yellowCircle from "../../assests/login/yellowCircle.svg";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onLoginHandler = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      if (email === "akbarsha@gmail.com" && password === "akbarSha") {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        toast.success("Welcome Akbar_Sha!");
        setEmail("");
        setPassword("");
        navigate("/welcome");
      } else {
        toast.error("Invalid Credentials!");
      }
    } else {
      toast.error("All fields required!");
    }
  };

  return (
    <main className="h-screen w-screen">
      <main className="modal">
        {/* Left Container */}
        <section className="w-[23rem] px-10 flex flex-col items-center justify-center text-sm">
          <div className="mb-5 text-2xl text-black font-semibold">
            Welcome Back
          </div>
          <div className="text-xs font-medium text-black">
            Please enter your details
          </div>

          {/* Google_Sign_in_Button  */}
          <section
            id="Google_Sign_in_Button"
            className="flex items-center justify-center cursor-pointer hover:shadow-md"
          >
            <div className="iconCon">
              <FcGoogle className="googleIcon" />
            </div>
            <div className="ml-2 text-xs font-medium text-black">
              Log In with Google
            </div>
          </section>
          {/* Or */}
          <div className="w-full flex items-center justify-center">
            <div className="h-[1px] w-full bg-gray-300"></div>
            <div className="p-2 rounded-full text-xs font-semibold text-gray-300">
              Or
            </div>
            <div className="h-[1px] w-full bg-gray-300"></div>
          </div>

          <form className="mt-5 w-full" onSubmit={onLoginHandler}>
            {/* Email */}
            <div className="mb-2">
              <input
                type={"email"}
                className="inputTag"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Password */}
            <div className="relative mb-2">
              <input
                type={showPassword ? "text" : "password"}
                className="inputTag "
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <div
                  className="iconCon absolute top-3.5 right-3 cursor-pointer"
                  onClick={() => setShowPassword(false)}
                >
                  <VscEyeClosed className="closeEyeIcon" />
                </div>
              ) : (
                <div
                  className="iconCon absolute top-3.5 right-3 cursor-pointer"
                  onClick={() => setShowPassword(true)}
                >
                  <VscEye className="openEyeIcon" />
                </div>
              )}
            </div>
            <div className="flex items-center justify-end text-[11px] font-medium text-gray-400 cursor-pointer">
              Forgot password?
            </div>
            <button
              type="submit"
              className="mt-6 p-3 w-full bg-gradient-to-tr from-primaryGradient1 to-primaryGradient2 rounded-full hover:shadow-md text-white outline-none"
            >
              Log in
            </button>
          </form>
          <div className="mt-2 text-xs font-medium text-gray-400">
            Don't have an account?{" "}
            <span className="text-black cursor-pointer">Sign Up</span>
          </div>
        </section>
        {/* Right Container */}
        <section className="hidden lg:inline-flex w-[26rem] h-[30rem] bg-gradient-to-tr from-primaryGradient1 to-primaryGradient2 rounded-3xl">
          <main className="modal flex-col">
            <div className="mb-2 w-full h-24 border">
              {/* Gif should come here */}
            </div>
            <div className="px-10 flex flex-col items-start justify-center text-grey text-2xl">
              <p>Streamline your broken</p>
              <div className="relative">
                <p className="my-1 text-white font-medium overflow-visible">
                  Job request-to-hire
                </p>
                <div className="absolute -top-3 -right-11 w-[340px]">
                  <img src={yellowCircle} alt={"loginGif"} />
                </div>
              </div>
              <p>process</p>
            </div>
          </main>
        </section>
      </main>
    </main>
  );
};

export default Login;
