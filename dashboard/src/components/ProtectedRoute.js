import React, { useState, useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    // 1. Check for token and user in URL query params (from frontend login redirect)
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");
    const userFromUrl = urlParams.get("user");

    if (tokenFromUrl) {
      localStorage.setItem("token", tokenFromUrl);
      if (userFromUrl) {
        try {
          localStorage.setItem("user", decodeURIComponent(userFromUrl));
        } catch {
          localStorage.setItem("user", userFromUrl);
        }
      }
      // Clean query parameters from URL without refreshing
      window.history.replaceState({}, document.title, window.location.pathname);
      setIsAuthenticated(true);
      return;
    }

    // 2. Check localStorage
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      // Redirect to login page on the frontend
      window.location.href = "http://localhost:3000/login";
    }
  }, []);

  if (isAuthenticated === null) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "sans-serif",
          color: "#666",
        }}
      >
        <p>Verifying authentication session...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return children;
};

export default ProtectedRoute;
