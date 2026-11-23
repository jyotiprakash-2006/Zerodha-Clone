import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-4 border-bottom text-center">
        <h1 className="fw-bold">Pricing</h1>
        <h3 className="text-muted mt-2 fs-5">
          Free equity investments and flat ₹20 intraday and F&amp;O trades
        </h3>
      </div>
      <div className="row p-5 text-center g-4">
        <div className="col-12 col-md-4 p-4 border rounded shadow-sm bg-white">
          <img src="/media/image/pricingEquity.svg" alt="Free Equity" style={{ height: "160px" }} />
          <h2 className="fs-4 fw-bold mt-3">Free equity delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4 p-4 border rounded shadow-sm bg-white">
          <img src="/media/image/intradayTrades.svg" alt="Intraday Trades" style={{ height: "160px" }} />
          <h2 className="fs-4 fw-bold mt-3">Intraday and F&amp;O trades</h2>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity.
          </p>
        </div>
        <div className="col-12 col-md-4 p-4 border rounded shadow-sm bg-white">
          <img src="/media/image/pricingMF.svg" alt="Free Direct MF" style={{ height: "160px" }} />
          <h2 className="fs-4 fw-bold mt-3">Free direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0 commissions &amp; DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
