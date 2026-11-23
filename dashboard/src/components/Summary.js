import React, { useState, useEffect } from "react";
import axios from "axios";

const Summary = () => {
  const [user, setUser] = useState(null);
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("user");
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch {
      setUser(null);
    }

    axios
      .get("http://localhost:3002/allHoldings")
      .then((res) => {
        setHoldings(res.data);
      })
      .catch((err) => {
        console.error("Error fetching summary holdings:", err);
      });
  }, []);

  const totalInvestment = holdings.reduce(
    (acc, stock) => acc + (Number(stock.avg) || 0) * (Number(stock.qty) || 1),
    0
  );

  const currentValTotal = holdings.reduce(
    (acc, stock) => acc + (Number(stock.price) || 0) * (Number(stock.qty) || 1),
    0
  );

  const totalPnl = currentValTotal - totalInvestment;
  const pnlPercent = totalInvestment > 0 ? ((totalPnl / totalInvestment) * 100).toFixed(2) : "0.00";
  const isProfit = totalPnl >= 0;

  const displayName = user?.username ? user.username : "Trader";

  return (
    <>
      <div className="username">
        <h6>Hi, {displayName}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>4.04k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>
            </p>
            <p>
              Opening balance <span>4.04k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={isProfit ? "profit" : "loss"}>
              {isProfit ? `+${(totalPnl / 1000).toFixed(2)}k` : `${(totalPnl / 1000).toFixed(2)}k`}{" "}
              <small>{isProfit ? `+${pnlPercent}%` : `${pnlPercent}%`}</small>
            </h3>
            <p>P&amp;L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{(currentValTotal / 1000).toFixed(2)}k</span>
            </p>
            <p>
              Investment <span>{(totalInvestment / 1000).toFixed(2)}k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
