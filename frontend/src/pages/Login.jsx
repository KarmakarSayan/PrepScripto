import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  // State to toggle between "Login" and "Sign Up"
  const [currentState, setCurrentState] = useState("Sign Up");

  // State to hold the form data
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Handler to update form data as the user types
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(data => ({ ...data, [name]: value }));
  };

  // Handler for form submission
  const onLogin = (event) => {
    event.preventDefault(); // Prevent the form from reloading the page
    // For now, we'll just log the data to the console.
    // Later, you would add your actual login/signup logic here (e.g., calling an API).
    if (currentState === "Login") {
      console.log("Login data submitted:", { email: data.email, password: data.password });
      alert("Login functionality coming soon!");
    } else {
      console.log("Signup data submitted:", data);
      alert("Account creation functionality coming soon!");
    }
    // After action, you might navigate the user to the homepage
    // navigate('/');
  };

  return (
    <div className='login-page'>
      <div className="login-container">
        <form onSubmit={onLogin} className="login-form">
          <div className="login-title">
            <h1>{currentState}</h1>
            <p>
              {currentState === "Login"
                ? "Please login to book an appointment"
                : "Please sign up to book an appointment"}
            </p>
          </div>
          <div className="login-inputs">
            {currentState === "Sign Up" && (
              <input 
                name='name'
                onChange={onChangeHandler}
                value={data.name}
                type="text" 
                placeholder='Full Name' 
                required 
              />
            )}
            <input 
              name='email'
              onChange={onChangeHandler}
              value={data.email}
              type="email" 
              placeholder='Email' 
              required 
            />
            <input 
              name='password'
              onChange={onChangeHandler}
              value={data.password}
              type="password" 
              placeholder='Password' 
              required 
            />
          </div>
          <button type='submit'>
            {currentState === "Sign Up" ? "Create account" : "Login"}
          </button>
          <div className="login-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        </form>
        {currentState === "Login" ? (
          <p className="toggle-text">
            Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p className="toggle-text">
            Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
