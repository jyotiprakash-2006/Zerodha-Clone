import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-top mt-5" style={{ backgroundColor: "#fbfbfb" }}>
      <div className="container py-5">
        <div className="row">
          {/* Column 1: Brand & Social */}
          <div className="col-lg-3 col-md-6 mb-4">
            <Link to="/">
              <img
                src="/media/image/logo.svg"
                alt="Zerodha Logo"
                style={{ width: "130px", marginBottom: "15px" }}
              />
            </Link>
            <p className="text-muted" style={{ fontSize: "13px", lineHeight: "1.6" }}>
              &copy; 2010 - 2024, Zerodha Broking Ltd. All rights reserved.
            </p>
            <div className="d-flex gap-3 text-muted fs-5 mt-3">
              <a href="https://twitter.com/zerodhaonline" target="_blank" rel="noreferrer" className="text-muted">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://facebook.com/zerodha.social" target="_blank" rel="noreferrer" className="text-muted">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
              <a href="https://instagram.com/zerodhaonline" target="_blank" rel="noreferrer" className="text-muted">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://linkedin.com/company/zerodha" target="_blank" rel="noreferrer" className="text-muted">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://t.me/zerodhainvestor" target="_blank" rel="noreferrer" className="text-muted">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fs-6 fw-bold mb-3 text-dark">Company</h5>
            <ul className="list-unstyled" style={{ fontSize: "14px", lineHeight: "2" }}>
              <li><Link to="/about" className="text-muted text-decoration-none">About</Link></li>
              <li><Link to="/product" className="text-muted text-decoration-none">Products</Link></li>
              <li><Link to="/pricing" className="text-muted text-decoration-none">Pricing</Link></li>
              <li><Link to="/signup" className="text-muted text-decoration-none">Referral programme</Link></li>
              <li><a href="https://careers.zerodha.com" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">Careers</a></li>
              <li><a href="https://zerodha.tech" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">Zerodha.tech</a></li>
              <li><Link to="/about" className="text-muted text-decoration-none">Press & media</Link></li>
              <li><a href="https://zerodha.org" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">Zerodha Cares (CSR)</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fs-6 fw-bold mb-3 text-dark">Support</h5>
            <ul className="list-unstyled" style={{ fontSize: "14px", lineHeight: "2" }}>
              <li><Link to="/support" className="text-muted text-decoration-none">Contact us</Link></li>
              <li><Link to="/support" className="text-muted text-decoration-none">Support portal</Link></li>
              <li><a href="https://zconnect.zerodha.com" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">Z-Connect blog</a></li>
              <li><Link to="/pricing" className="text-muted text-decoration-none">List of charges</Link></li>
              <li><Link to="/support" className="text-muted text-decoration-none">Downloads & resources</Link></li>
              <li><a href="https://zerodha.com/videos" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">Videos</a></li>
              <li><a href="https://tradingqna.com" target="_blank" rel="noreferrer" className="text-muted text-decoration-none">Market overview</a></li>
              <li><Link to="/support" className="text-muted text-decoration-none">How to file a complaint?</Link></li>
            </ul>
          </div>

          {/* Column 4: Account */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fs-6 fw-bold mb-3 text-dark">Account</h5>
            <ul className="list-unstyled" style={{ fontSize: "14px", lineHeight: "2" }}>
              <li><Link to="/signup" className="text-muted text-decoration-none">Open an account</Link></li>
              <li><Link to="/login" className="text-muted text-decoration-none">Fund transfer</Link></li>
              <li><a href="http://localhost:3001" className="text-muted text-decoration-none">Kite Trading Platform</a></li>
              <li><Link to="/about" className="text-muted text-decoration-none">60 day challenge</Link></li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclaimers */}
        <div className="mt-4 pt-3 border-top text-muted" style={{ fontSize: "11px", lineHeight: "1.8" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX &ndash; SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. &ndash; SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 &ndash; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances.
          </p>
          <p>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3 pt-3" style={{ fontSize: "12px" }}>
            <Link to="/" className="text-muted text-decoration-none">NSE</Link>
            <Link to="/" className="text-muted text-decoration-none">BSE</Link>
            <Link to="/" className="text-muted text-decoration-none">MCX</Link>
            <Link to="/about" className="text-muted text-decoration-none">Terms &amp; conditions</Link>
            <Link to="/about" className="text-muted text-decoration-none">Policies &amp; procedures</Link>
            <Link to="/about" className="text-muted text-decoration-none">Privacy policy</Link>
            <Link to="/pricing" className="text-muted text-decoration-none">Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
