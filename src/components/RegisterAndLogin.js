import React, { useState } from "react";
import { database } from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function RegisterAndLogin() {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // eslint-disable-next-line
    if (type == "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/general");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/general");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = () => {
    history("/reset");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 w-86">
        <div className="flex justify-between mb-4">
          <button
            className={`mr-2 focus:outline-none ${
              !login ? "font-bold text-white bg-blue-500 rounded-lg p-2" : "text-gray-400"
            }`}
            onClick={() => setLogin(false)}
          >
            SignUp
          </button>
          <button
            className={`focus:outline-none ${
              login ? "font-bold text-white  bg-blue-500 rounded-lg p-2" : "text-gray-400"
            }`}
            onClick={() => setLogin(true)}
          >
            SignIn
          </button>
        </div>
        <h1 className="text-center">{login ? "SignIn" : "SignUp"}</h1>
        <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
          <input
            name="email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2 focus:outline-none"
            placeholder="Email"
          />
          <br />
          <input
            name="password"
            type="password"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-2 focus:outline-none"
            placeholder="Password"
          />
          <br />
          <p
            className="text-sm text-blue-500 cursor-pointer mt-2 text-center"
            onClick={handleReset}
          >
            Forgot Password?
          </p>
          <br />
          <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md mt-4 focus:outline-none">
            {login ? "SignIn" : "SignUp"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterAndLogin;
