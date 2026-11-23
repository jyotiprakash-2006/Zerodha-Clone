import React from "react";
import { Link } from "react-router-dom";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-4 mt-4 mb-4">
        <h1 className="fs-3 fw-bold mb-4">
          To create a ticket, select a relevant topic
        </h1>

        {/* Account Opening */}
        <div className="col-12 col-md-4 p-4">
          <h4 className="fs-5 fw-bold mb-3 text-dark">
            <i className="fa fa-plus-circle text-primary me-2" aria-hidden="true"></i> Account Opening
          </h4>
          <div className="d-flex flex-column gap-2" style={{ fontSize: "14px" }}>
            <Link to="/support" className="text-decoration-none text-muted">Online Account Opening</Link>
            <Link to="/support" className="text-decoration-none text-muted">Offline Account Opening</Link>
            <Link to="/support" className="text-decoration-none text-muted">Company, Partnership and HUF Account Opening</Link>
            <Link to="/support" className="text-decoration-none text-muted">NRI Account Opening</Link>
            <Link to="/pricing" className="text-decoration-none text-muted">Charges at Zerodha</Link>
            <Link to="/support" className="text-decoration-none text-muted">Zerodha IDFC FIRST Bank 3-in-1 Account</Link>
            <Link to="/support" className="text-decoration-none text-muted">Getting Started</Link>
          </div>
        </div>

        {/* Your Zerodha Account */}
        <div className="col-12 col-md-4 p-4">
          <h4 className="fs-5 fw-bold mb-3 text-dark">
            <i className="fa-solid fa-user text-primary me-2"></i> Your Zerodha Account
          </h4>
          <div className="d-flex flex-column gap-2" style={{ fontSize: "14px" }}>
            <Link to="/login" className="text-decoration-none text-muted">Login Credentials</Link>
            <Link to="/support" className="text-decoration-none text-muted">Account Modification and Segment Addition</Link>
            <Link to="/support" className="text-decoration-none text-muted">DP ID and Bank Details</Link>
            <Link to="/support" className="text-decoration-none text-muted">Your Profile &amp; Settings</Link>
            <Link to="/support" className="text-decoration-none text-muted">Transfer and Conversion of Shares</Link>
          </div>
        </div>

        {/* Trading and Platforms */}
        <div className="col-12 col-md-4 p-4">
          <h4 className="fs-5 fw-bold mb-3 text-dark">
            <i className="fa-solid fa-arrow-up-from-bracket text-primary me-2"></i> Trading and Markets
          </h4>
          <div className="d-flex flex-column gap-2" style={{ fontSize: "14px" }}>
            <Link to="/support" className="text-decoration-none text-muted">Margin/leverage, Product and Order types</Link>
            <a href="http://localhost:3001" className="text-decoration-none text-muted">Kite Web and Mobile</a>
            <Link to="/support" className="text-decoration-none text-muted">Trading FAQs</Link>
            <Link to="/support" className="text-decoration-none text-muted">Corporate Actions</Link>
            <Link to="/support" className="text-decoration-none text-muted">Sentinel &amp; Stock Alerts</Link>
            <Link to="/product" className="text-decoration-none text-muted">Kite Connect API</Link>
            <Link to="/support" className="text-decoration-none text-muted">GTT Orders</Link>
          </div>
        </div>

        {/* Funds */}
        <div className="col-12 col-md-4 p-4">
          <h4 className="fs-5 fw-bold mb-3 text-dark">
            <i className="fa-solid fa-money-check-dollar text-primary me-2"></i> Funds
          </h4>
          <div className="d-flex flex-column gap-2" style={{ fontSize: "14px" }}>
            <Link to="/login" className="text-decoration-none text-muted">Adding Funds</Link>
            <Link to="/login" className="text-decoration-none text-muted">Fund Withdrawal</Link>
            <Link to="/support" className="text-decoration-none text-muted">eMandates</Link>
            <Link to="/support" className="text-decoration-none text-muted">Adding Bank Accounts</Link>
          </div>
        </div>

        {/* Console */}
        <div className="col-12 col-md-4 p-4">
          <h4 className="fs-5 fw-bold mb-3 text-dark">
            <i className="fa-solid fa-circle-notch text-primary me-2"></i> Console
          </h4>
          <div className="d-flex flex-column gap-2" style={{ fontSize: "14px" }}>
            <Link to="/product" className="text-decoration-none text-muted">Reports &amp; Tradebook</Link>
            <Link to="/product" className="text-decoration-none text-muted">Ledger Statements</Link>
            <Link to="/product" className="text-decoration-none text-muted">Portfolio &amp; Tax P&amp;L</Link>
            <Link to="/about" className="text-decoration-none text-muted">60 Day Challenge</Link>
            <Link to="/product" className="text-decoration-none text-muted">IPO Applications</Link>
            <Link to="/signup" className="text-decoration-none text-muted">Referral Program</Link>
          </div>
        </div>

        {/* Coin */}
        <div className="col-12 col-md-4 p-4">
          <h4 className="fs-5 fw-bold mb-3 text-dark">
            <i className="fa-solid fa-coins text-primary me-2"></i> Coin
          </h4>
          <div className="d-flex flex-column gap-2" style={{ fontSize: "14px" }}>
            <Link to="/product" className="text-decoration-none text-muted">Understanding Mutual Funds</Link>
            <Link to="/product" className="text-decoration-none text-muted">About Coin</Link>
            <Link to="/product" className="text-decoration-none text-muted">Buying and Selling through Coin</Link>
            <Link to="/product" className="text-decoration-none text-muted">Starting a SIP</Link>
            <Link to="/product" className="text-decoration-none text-muted">Managing your Portfolio</Link>
            <Link to="/product" className="text-decoration-none text-muted">Government Securities</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
