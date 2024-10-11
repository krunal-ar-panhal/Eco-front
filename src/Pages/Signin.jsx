import React, { useState } from "react";
import Motion from "../Components/Motion";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from "../Redux/Auth/authSlice";

const Signin = () => {
  const [currentState, setCurrentState] = useState("Sign In");
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = currentState === "Sign In" ? "/api/user/signin" : "/api/user/signup";
      const payload = currentState === "Sign In"
        ? { email, password }
        : { name, email, password }; 

      const response = await axios.post(apiUrl, payload);

      if (response.data.success) {
        dispatch(setToken(response.data.token));
        navigate('/');
        toast.success(currentState === "Sign In" ? "Logged in successfully!" : "Account created successfully!");
      } else {
        toast.error(response.data.message);
      }
      
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <Motion>
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl ">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        
        {currentState === "Sign Up" && (
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-800"
          />
        )}
        
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-800"
        />
        
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-800"
        />
        
        <div className="w-full flex justify-between text-sm mt-[8px]">
          <p className="cursor-pointer">Forget your password?</p>
          {currentState === "Sign In" ? (
            <p onClick={() => setCurrentState("Sign Up")} className="cursor-pointer">Create Account</p>
          ) : (
            <p onClick={() => setCurrentState("Sign In")} className="cursor-pointer">Login here</p>
          )}
        </div>
        
        <button className="bg-black text-white font-light px-8 py-2 mt-4">
          {currentState === "Sign In" ? "Good To Go In" : "Good To Go Up"}
        </button>
      </form>
    </Motion>
  );
};

export default Signin;
