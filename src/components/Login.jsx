import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaApple } from "react-icons/fa";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Login = ({ setloginsetter }) => {
 


  

  return (
    <div className=" bg-[#00000090] absolute top-0 left-0  z-[99999] h-[900vh] sm:h-[350vh]  w-[100%] 2xl:w-full 2xl:h-[200vh] flex  justify-center">
      <div className="login-container w-auto h-[10%] sm:h-[40%] lg:w-[30%] lg:h-[40%] rounded-xl bg-white p-4 overflow-hidden mt-40">
        <div className="heading-container border-b p-4 border-[#d0d0d0] flex items-center gap-24 2xl:gap-44">
          <RxCross1
            className="cursor-pointer"
            onClick={() => setloginsetter((prev) => !prev)}
          />{" "}
          <p className=" text-center font-semibold ">Login or Sign up</p>
        </div>
        <p className="py-4 text-lg font-semibold">Welcome To Airbnb</p>
        <div className="form-container flex flex-col py-2">
          <input
            type="text"
            placeholder="Enter The Name"
            className="p-2 border border-[#d0d0d0] my-1" 
          />
          <input
            type="text"
            placeholder="Enter the number"
            className="p-2 border border-[#d0d0d0] my-1"
          />
          <p className="mt-1 text-sm">
            We’ll call or text you to confirm your number. Standard message and
            data rates apply.{" "}
            <a className="text-sky-600" href="/">
              Privacy Policy
            </a>
          </p>
          <button  className="py-4 bg-[#d80765] text-white rounded-lg my-2">
            continue
          </button>
          <p className=" text-center">or</p>
          <button className="py-2 rounded-lg my-2 border border-[#303030] flex items-center justify-center gap-2 ">
            <FaFacebook />
            continue with Facebook
          </button>
          <button className="py-2 rounded-lg my-2 border border-[#303030] flex items-center justify-center gap-2 ">
            <FaGoogle />
            continue with Google
          </button>
          <button className="py-2 rounded-lg my-2 border border-[#303030] flex items-center justify-center gap-2 ">
            <FaApple /> continue with Apple
          </button>
          <button className="hidden  py-2 rounded-lg my-2 border border-[#303030] 2xl:flex items-center justify-center gap-2 ">
            <AiOutlineMail />
            continue with Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
