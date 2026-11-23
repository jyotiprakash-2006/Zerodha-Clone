import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 border-top">
        <h1 className="text-center fw-bold">People</h1>
      </div>

      <div
        className="row p-4 text-muted align-items-center"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        <div className="col-12 col-md-5 p-3 text-center">
          <img
            src="/media/image/nithinKamath.jpg"
            alt="Nithin Kamath"
            style={{ borderRadius: "100%", width: "55%", maxWidth: "250px" }}
          />
          <h4 className="mt-4 fw-bold text-dark">Nithin Kamath</h4>
          <h6 className="text-muted">Founder, CEO</h6>
        </div>

        <div className="col-12 col-md-7 p-3 fs-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and
            the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <Link style={{ textDecoration: "none" }} to="/" className="text-primary fw-semibold">
              Homepage
            </Link>{" "}
            /{" "}
            <a style={{ textDecoration: "none" }} href="https://tradingqna.com" target="_blank" rel="noreferrer" className="text-primary fw-semibold">
              TradingQ&amp;A
            </a>{" "}
            /{" "}
            <a style={{ textDecoration: "none" }} href="https://twitter.com/nithinkamath" target="_blank" rel="noreferrer" className="text-primary fw-semibold">
              Twitter
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
