import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="fw-bold">The Zerodha Universe</h1>

        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Smallcase */}
        <div className="col-4 p-3 mt-5">
          <img
            src="/media/image/smallcaseLogo.png"
            style={{ width: "150px", height: "auto" }}
            alt="Smallcase"
          />
          <p className="text-small text-muted mt-2">
            Thematic investment platform
          </p>
        </div>

        {/* Streak */}
        <div className="col-4 p-3 mt-5">
          <img
            src="/media/image/streakLogo.png"
            style={{ width: "150px", height: "auto" }}
            alt="Streak"
          />
          <p className="text-small text-muted mt-2">Algo &amp; strategy platform</p>
        </div>

        {/* Sensibull */}
        <div className="col-4 p-3 mt-5">
          <img
            src="/media/image/sensibullLogo.svg"
            style={{ width: "150px", height: "auto" }}
            alt="Sensibull"
          />
          <p className="text-small text-muted mt-2">Options trading platform</p>
        </div>

        {/* Zerodha Fund House */}
        <div className="col-4 p-3 mt-5">
          <img
            src="/media/image/zerodhaFundhouse.png"
            style={{
              width: "200px",
              height: "auto",
              maxHeight: "100px",
              objectFit: "contain",
            }}
            alt="Zerodha Fund House"
          />
          <p className="text-small text-muted mt-2">Asset management</p>
        </div>

        {/* GoldenPi */}
        <div className="col-4 p-3 mt-5">
          <img
            src="/media/image/goldenpiLogo.png"
            style={{ width: "150px", height: "auto" }}
            alt="GoldenPi"
          />
          <p className="text-small text-muted mt-2">Bonds trading platform</p>
        </div>

        {/* Ditto */}
        <div className="col-4 p-3 mt-5">
          <img
            src="/media/image/dittoLogo.png"
            style={{
              width: "150px",
              height: "auto",
              maxHeight: "70px",
              objectFit: "contain",
            }}
            alt="Ditto"
          />
          <p className="text-small text-muted mt-2">Insurance</p>
        </div>

        {/* Button */}
        <div className="col-12 mt-4">
          <Link
            to="/signup"
            className="p-3 btn btn-primary fs-5 mb-5 text-white"
            style={{
              width: "20%",
              minWidth: "180px",
              margin: "0 auto",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            Signup Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Universe;
