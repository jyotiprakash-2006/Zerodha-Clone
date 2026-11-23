import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 p-4 text-center">
          <img
            className="mb-4 img-fluid"
            src="/media/image/education.svg"
            alt="Education"
            style={{ maxWidth: "80%" }}
          />
        </div>

        <div className="col-12 col-md-6 p-4">
          <h1 className="fs-2 mb-4 fw-bold">Free and open market education</h1>

          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a
            href="https://zerodha.com/varsity"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
            className="fw-semibold text-primary"
          >
            Varsity
            <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
          </a>

          <p className="text-muted mt-4">
            TradingQ&amp;A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a
            href="https://tradingqna.com"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
            className="fw-semibold text-primary"
          >
            TradingQ&amp;A
            <i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
