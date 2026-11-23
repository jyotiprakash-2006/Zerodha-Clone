import React from "react";
import { Link } from "react-router-dom";

function Brockerage() {
  return (
    <div className="container">
      <div className="row p-4 mt-4 text-center border-top">
        <div className="col-12 col-md-8 text-start">
          <Link to="/pricing" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 text-primary fw-bold">Brokerage calculator</h3>
          </Link>
          <ul style={{ lineHeight: "2.2", fontSize: "14px" }} className="text-muted mt-4 ps-3">
            <li>
              Call &amp; Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-4 text-start text-md-center mt-3 mt-md-0">
          <Link to="/pricing" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 text-primary fw-bold">List of charges</h3>
          </Link>
          <p className="text-muted small mt-3">
            Transparent and unbundled pricing. Check our comprehensive list of charges, statutory levies, and stamp duty.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brockerage;
