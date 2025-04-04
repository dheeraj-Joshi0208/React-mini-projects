import React, { useState } from "react";
import "./app.css";

const Form = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    setUser(initialState);
  };

  const renderInput = (id, type, placeholder) => (
    <div className="input-group">
      <label htmlFor={id}>{id.charAt(0).toUpperCase() + id.slice(1)}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={user[id]}
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

        {renderInput("name", "text", "Jhon Doe")}
        {renderInput("email", "text", "jhondoe@gmail.com")}
        {renderInput("passward", "passward", "")}

        <button type="submit" className="manual-btn">
          Create an account
        </button>

        <div className="form-footer">
          <p></p>
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
