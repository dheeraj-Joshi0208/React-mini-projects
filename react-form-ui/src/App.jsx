import React from "react";
import "./app.css";

const Form = () => {
  return (
    <div className="form-container">
      <form className="form">
        <h1>Create an account</h1>
        <p>Enter your email below to create your account</p>
        <div className="social">
          <button>
            <i class="ri-github-fill"></i>GitHub
          </button>
          <button>
            <i class="ri-google-fill"></i>Google
          </button>
        </div>
        <div className="partition">
          <h6>Or continue with</h6>
        </div>
        <div className="mannual">
          <label className="">
            Name
            <input type="text" name="name" />
          </label>
          <label className="">
            Email
            <input type="email" name="email" />
          </label>
          <label className="">
            Passward
            <input type="tel" name="phone" />
          </label>
          <button className="mannual-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

function App() {
  return (
    <>
      <div>
        <Form />
      </div>
    </>
  );
}

export default App;
