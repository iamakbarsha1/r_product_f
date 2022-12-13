import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const onBackToLoginHandler = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  return (
    <main className="h-screen w-screen">
      <main className="modal flex-col">
        <section className="animate-bounce p-3 text-white rounded-lg bg-gradient-to-tr from-primaryGradient1 to-primaryGradient2 shadow-md shadow-cyan-100">
          <div>
            Welcome{" "}
            <span className="font-medium">{localStorage.getItem("email")}</span>
            !
          </div>
        </section>
        <section
          className="flex items-center justify-center"
          onClick={onBackToLoginHandler}
        >
          <button className="ml-1 mt-3 text-gray-400 underline underline-offset-2">
            Back to login
          </button>
        </section>
      </main>
    </main>
  );
};

export default Welcome;
