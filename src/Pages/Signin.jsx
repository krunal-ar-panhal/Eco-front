import React, { useState } from "react";
import Motion from "../Components/Motion";

const Signin = () => {
  const [currentState, setCurrentState] = useState("Sign In");

  const handleSubmit = (e) => {
    e.preventdefault()
  }

  return (
    <Motion>
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl ">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        {currentState === "Sign In" ? (
          ""
        ) : (
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full px-3 py-2 border border-gray-800"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full px-3 py-2 border border-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full px-3 py-2 border border-gray-800"
        />
        <div className="w-full flex justify-between text-sm mt-[8px]">
          <p className="cursor-pointer"> Forget your password</p>
          {currentState === "Sign In" ? (
            <p onClick={()=>setCurrentState("Sign Up")} className="cursor-pointer">Create Account</p>
          ) : (
            <p onClick={()=>setCurrentState("Sign In")} className="cursor-pointer">Login here</p>
          )}
        </div>
        <button className="bg-black text-white font-light px-8 py-2 mt-4">{currentState === "Sign In" ? "Good To Go In" : "Good To Go Up" }</button>
      </form>
    </Motion>
  );
};

export default Signin;
