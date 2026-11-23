import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div className="container py-4">
      <div className="row align-items-center">
        <div className="col-12 col-md-5 mb-4 mb-md-0">
          <h1 className="fs-2 mb-4 fw-bold">Unbeatable Pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <Link to="/pricing" style={{ textDecoration: "none" }} className="fw-semibold text-primary">
            See pricing{" "}
            <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="col-md-1"></div>
        <div className="col-12 col-md-6 mb-5">
          <div className="row text-center g-3">
            <div className="col p-3 border rounded shadow-sm bg-white">
              <h1 className="mb-3 fw-bold text-dark">₹0</h1>
              <p className="text-muted small">
                Free equity delivery and <br /> direct mutual funds
              </p>
            </div>
            <div className="col p-3 border rounded shadow-sm bg-white">
              <h1 className="mb-3 fw-bold text-dark">₹20</h1>
              <p className="text-muted small">Intraday and F&amp;O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
