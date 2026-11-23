import React from "react";

function Awards() {
  return (
    <div className="container mb-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 p-4 text-center">
          <img
            src="/media/image/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
            style={{ maxWidth: "85%" }}
          />
        </div>
        <div className="col-12 col-md-6 p-4">
          <h1 className="fw-bold mb-3">Largest stock broker in India</h1>
          <p className="mb-4 text-muted">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul className="text-muted" style={{ lineHeight: "2" }}>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="text-muted" style={{ lineHeight: "2" }}>
                <li>Stocks &amp; IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
            <div className="col-12 text-center mt-3">
              <img
                className="img-fluid p-2"
                src="/media/image/pressLogos.png"
                alt="Press Logos"
                style={{ width: "90%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
