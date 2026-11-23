import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5 mt-2">
      <div className="row text-center mt-3">
        <h1 className="mt-5 fw-bold">Open a Zerodha account</h1>
        <p className="lead mt-2 text-muted">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&amp;O
          trades.
        </p>
        <Link
          to="/signup"
          className="p-3 btn btn-primary fs-5 mb-5 mt-2 text-white"
          style={{ width: "20%", minWidth: "180px", margin: "0 auto", textDecoration: "none" }}
        >
          Sign up Now
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
