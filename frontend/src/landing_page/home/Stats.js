import React from "react";
import { Link } from "react-router-dom";

function Stats() {
  return (
    <div className="container mb-3">
      <div className="row p-4 align-items-center">
        <div className="col-12 col-md-6 p-4">
          <h1 className="fs-2 mb-4 fw-bold">Trust with confidence</h1>
          
          <h2 className="fs-5 fw-semibold">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>

          <h2 className="fs-5 fw-semibold mt-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-5 fw-semibold mt-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-5 fw-semibold mt-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate your transactions, but actively help you do better with
            your money.
          </p>
        </div>

        <div className="col-12 col-md-6 p-4 text-center">
          <img
            src="/media/image/ecosystem.png"
            alt="Zerodha Ecosystem"
            className="img-fluid mb-4"
            style={{ width: "90%" }}
          />
          <div className="d-flex justify-content-center gap-4">
            <Link to="/product" style={{ textDecoration: "none" }} className="fw-semibold text-primary">
              Explore our products{" "}
              <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
            </Link>
            <a
              href="http://localhost:3001"
              style={{ textDecoration: "none" }}
              className="fw-semibold text-primary"
            >
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
