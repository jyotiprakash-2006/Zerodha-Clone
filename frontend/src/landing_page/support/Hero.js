import React, { useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <section className="container-fluid py-4" id="supportHero">
      <div className="container" id="supportWrapper">
        <div className="d-flex justify-content-between align-items-center py-3">
          <h4 className="fw-bold mb-0">Support Portal</h4>
          <Link to="/support" className="supportTrack text-white fw-semibold">
            Track Tickets
          </Link>
        </div>

        <div className="row py-4">
          <div className="col-12 col-md-7 mb-4 mb-md-0" id="searchSupport">
            <h1 className="fs-4 mb-3">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <form onSubmit={handleSearch} className="mb-3">
              <input
                className="form-control form-control-lg"
                placeholder="Eg. how do I activate F&O, why is my order rejected..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>

            <div className="d-flex flex-wrap gap-3 mt-3" style={{ fontSize: "14px" }}>
              <Link to="/support" className="text-white">Track account opening</Link>
              <Link to="/support" className="text-white">Track segment activation</Link>
              <Link to="/pricing" className="text-white">Intraday margins</Link>
              <Link to="/product" className="text-white">Kite user manual</Link>
            </div>
          </div>

          <div className="col-12 col-md-5 ps-md-5" id="supportFeatured">
            <h2 className="fs-4 fw-bold mb-3">Featured</h2>
            <ol className="ps-3" style={{ lineHeight: "2" }}>
              <li>
                <Link to="/support" className="text-white text-decoration-none">
                  Current Takeovers and delisting - January 2024
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/pricing" className="text-white text-decoration-none">
                  Latest Intraday leverages - MIS &amp; CO
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
