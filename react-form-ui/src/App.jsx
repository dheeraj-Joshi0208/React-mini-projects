import React, { useState } from "react";
import "./app.css";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Create an account</h1>
        <p>Enter your email below to create your account</p>
        <div className="social">
          <button type="button">
            <i className="ri-github-fill"></i>GitHub
          </button>
          <button type="button">
            <i className="ri-google-fill"></i>Google
          </button>
        </div>
        <div className="partition">
          <h6>Or continue with</h6>
        </div>
        <div className="manual">
          <label>
            Name
            <input
              type="text"
              name="name"
              value={user.name}
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={user.email}
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </label>
          <button className="manual-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
