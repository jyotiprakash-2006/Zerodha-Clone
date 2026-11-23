import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="/media/image/homeHero.png"
          alt="Hero"
          className="mb-5 img-fluid mx-auto"
          style={{ maxWidth: "800px" }}
        />
        <h1 className="mt-5 fw-bold">Invest in everything</h1>
        <p className="lead mt-2 text-muted">
          Online platform to invest in stocks, derivatives, mutual funds and
          more
        </p>
        <Link
          to="/signup"
          className="p-3 btn btn-primary fs-5 mb-5 text-white"
          style={{ width: "20%", minWidth: "180px", margin: "0 auto", textDecoration: "none" }}
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default Hero;
