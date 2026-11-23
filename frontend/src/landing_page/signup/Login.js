import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("http://localhost:3002/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Login successful! Redirecting to Kite Dashboard...");
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        window.dispatchEvent(new Event("authChange"));

        // Redirect to Kite Dashboard on port 3001 with session credentials
        setTimeout(() => {
          const dashboardUrl = `http://localhost:3001?token=${data.token}&user=${encodeURIComponent(
            JSON.stringify(data.user)
          )}`;
          window.location.href = dashboardUrl;
        }, 800);
      } else {
        setErrorMessage(data.message || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Unable to connect to server. Please ensure backend is running.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <Link to="/">
            <img src="/media/image/logo.svg" alt="logo" />
          </Link>
        </div>

        <h1>Welcome Back</h1>
        <p className="auth-subtitle">Login to Kite &amp; Zerodha</p>

        {errorMessage && (
          <div className="alert alert-danger p-2 text-center" style={{ fontSize: "14px" }}>
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="alert alert-success p-2 text-center" style={{ fontSize: "14px" }}>
            {successMessage}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>

          <button className="auth-button" type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login to Kite"}
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account?
          <span onClick={() => navigate("/signup")}>Sign Up</span>
        </p>

        <div className="text-center mt-3">
          <Link to="/" style={{ fontSize: "13px", color: "#888", textDecoration: "none" }}>
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
