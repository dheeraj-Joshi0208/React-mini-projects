import React, { useState } from "react";
import "./app.css";

const Form = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
  };
  const [user, setUser] = useState(initialState);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password, confirmPassword } = user;
    const validations = [
      {
        condition: !name || !email || !password || !confirmPassword,
        message: "All fields are required",
      },
      {
        condition: password !== confirmPassword,
        message: "Passwords do not match",
      },
      {
        condition: password.length < 8,
        message: "Password must be at least 8 characters",
      },
      {
        condition: !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
          email
        ),
        message: "Invalid email address",
      },
      {
        condition:
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            password
          ),
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@,$,!,%,*,?,&)",
      },
      {
        condition: password.includes(" "),
        message: "Password cannot contain spaces",
      },
    ];

    for (const validation of validations) {
      if (validation.condition) {
        setUser((prevUser) => ({
          ...prevUser,
          error: validation.message,
        }));
        setSuccess(false);
        return;
      }
    }

    console.log(user);

    setSuccess(true);
    setUser((prevUser) => ({
      ...prevUser,
      error: "",
    }));

    setUser(initialState);
  };

  const renderInput = (id, type, placeholder) => (
    <div className="input-group">
      <label htmlFor={id}>
        {id
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase())}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={user[id] || ""}
        placeholder={placeholder}
        onChange={handleChange}
        required
      />
    </div>
  );

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-header">
          <h1>Create an account</h1>
          <p>Enter your email below to create your account</p>
        </div>
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
        {renderInput("name", "text", "John Doe")}
        {renderInput("email", "text", "johndoe@gmail.com")}
        {renderInput("password", "password", "Enter password")}
        {renderInput("confirmPassword", "password", "Confirm password")}
        <div className="error">
          {user.error ? (
            <p>
              <i className="ri-error-warning-fill"></i>
              {user.error}
            </p>
          ) : success ? (
            <p className="success">
              <i className="ri-check-line"></i>
              Your password is strong
            </p>
          ) : null}
        </div>
        <button type="submit" className="manual-btn">
          Create an account
        </button>
        <div className="form-footer">
          <p>
            By registering, you agree to our <span>Terms and Conditions</span>{" "}
            and <span>Privacy Policy</span>
          </p>
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
