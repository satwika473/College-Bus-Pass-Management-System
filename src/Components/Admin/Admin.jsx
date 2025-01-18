import React, { useState } from "react";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
export const Admin = () => {
    
  const [activeForm, setActiveForm] = useState("login"); // Track the current active form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regName, setRegName] = useState("");
  const [regAuthorizationId, setRegAuthorizationId] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate(); 

  // Toggle the active form
  const toggleForm = (formName) => {
    setActiveForm(formName);
  };

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
      console.log(regEmail);
      console.log(regPassword);
      const data = await response.json();
      const name = email.split("@")[0];
      if (response.ok) {
        console.log("Login successful:", data);
        alert("Login successful!");
        navigate("/mainadmin1");
      } else {
        console.error("Login failed:", data.error);
        alert(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong!");
    }
  };

  // Handle Registration
  const handleRegister = async (e) => {
    e.preventDefault();
    if (regPassword !== confirmPassword)  {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await fetch("http://localhost:3001/api/admin/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: regName,
          authorizationid: regAuthorizationId,
          email: regEmail,
          password: regPassword,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Registration successful:", data);
        alert("Registration successful!");
        toggleForm("login");
      } else {
        console.error("Registration failed:", data.error);
        alert(data.error || "Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Something went wrong!");
    }
  };

  // Handle Forgot Password
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/admin/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Password reset email sent:", data);
        alert("Check your email for reset instructions.");
        toggleForm("otp");
      } else {
        console.error("Error:", data.error);
        alert(data.error || "Failed to send reset email");
      }
    } catch (error) {
      console.error("Error during forgot password:", error);
      alert("Something went wrong!");
    }
  };

  // Handle OTP Verification
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/admin/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("OTP Verified:", data);
        alert("OTP Verified! You can now reset your password.");
        toggleForm("login");
      } else {
        console.error("OTP Verification failed:", data.error);
        alert(data.error || "OTP Verification failed");
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container1">
      <h1 className="h1">
        {activeForm === "login" ? "Welcome Admin" : "Create an Account"}
      </h1>
      <p className="p">
        {activeForm === "login"
          ? "Login to access your account"
          : "Register to get started"}
      </p>

      <div className="toggle-buttons">
        <button
          className={activeForm === "login" ? "active" : ""}
          onClick={() => toggleForm("login")}
        >
          Login
        </button>
        <button
          className={activeForm === "register" ? "active" : ""}
          onClick={() => toggleForm("register")}
        >
          Register
        </button>
      </div>

      {/* Login Form */}
      {activeForm === "login" && (
        <form onSubmit={handleLogin} className="active">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Login</button>
        </form>
      )}

      {/* Register Form */}
      {activeForm === "register" && (
        <form onSubmit={handleRegister} className="active">
          <div className="form-group">
            <label>Fullname</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={regName}
              onChange={(e) => setRegName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Authorization Id</label>
            <input
              type="text"
              placeholder="Enter your roll number"
              value={regAuthorizationId}
              onChange={(e) => setRegAuthorizationId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={regPassword}
              onChange={(e) => setRegPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
      <label>Confirm Password</label>
      <input
        type="password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
    </div>
          <button type="submit" className="submit-btn">Register</button>
        </form>
      )}
    </div>
  );
};   

