import React from "react";

const Funds = () => {
  const handleAddFunds = (e) => {
    e.preventDefault();
    alert("Instant UPI Fund Transfer: Enter your VPA to add instant zero-cost funds into your trading account.");
  };

  const handleWithdraw = (e) => {
    e.preventDefault();
    alert("Withdrawal Request: Available cash of ₹4,043.10 can be transferred to your primary bank account.");
  };

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <button
          type="button"
          className="btn btn-green"
          style={{ border: "none", cursor: "pointer" }}
          onClick={handleAddFunds}
        >
          Add funds
        </button>
        <button
          type="button"
          className="btn btn-blue"
          style={{ border: "none", cursor: "pointer" }}
          onClick={handleWithdraw}
        >
          Withdraw
        </button>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">4,043.10</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>4,064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <a
              href="http://localhost:3000/signup"
              className="btn btn-blue"
              style={{ display: "inline-block", textDecoration: "none" }}
            >
              Open Account
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
