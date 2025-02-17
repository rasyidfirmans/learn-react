/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link } from "react-router";
import { DarkMode } from "../../context/DarkMode";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute right-2 bottom-2 bg-blue-600 p-4 text-white rounded-full"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please fulfill the form below.
        </p>

        {children}

        <p
          className={`text-center text-black text-sm mt-5 ${
            isDarkMode && "text-white"
          }`}
        >
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}

          {/* client side routing */}
          <Link
            className="font-bold text-blue-600"
            to={type === "login" ? "/signup" : "/login"}
          >
            {type === "login" ? "Sign Up" : "Login"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
