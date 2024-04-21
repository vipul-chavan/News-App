import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { database } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const emailVal = e.target.email.value;
      sendPasswordResetEmail(database, emailVal)
        .then((data) => {
          alert('Check your email for password reset instructions.');
          navigate('/');
        })
        .catch((err) => {
          alert(err.code);
        });
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-zinc-900">
        <div className="bg-white p-8 rounded-md shadow-md w-96">
          <h1 className="text-2xl font-bold">Forgot Password</h1>
          <form onSubmit={(e) => handleSubmit(e)} className="mt-4">
            <input name="email" placeholder="Email" className="border border-gray-300 rounded-md p-2 w-full" />
            <br />
            <br />
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2 w-full">Reset</button>
          </form>
        </div>
      </div>
    );
  }
export default ForgotPassword;