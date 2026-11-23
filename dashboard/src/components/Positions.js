import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allPositions")
      .then((res) => {
        setAllPositions(res.data);
      })
      .catch((err) => {
        console.error("Error fetching positions:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&amp;L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="7" style={{ textAlign: "center", padding: "30px" }}>
                  Loading positions...
                </td>
              </tr>
            ) : allPositions.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: "center", padding: "30px" }}>
                  No open positions today.
                </td>
              </tr>
            ) : (
              allPositions.map((stock, index) => {
                const qty = Number(stock.qty) || 1;
                const avg = Number(stock.avg) || 0;
                const price = Number(stock.price) || 0;
                const curValue = price * qty;
                const invested = avg * qty;
                const pnl = curValue - invested;
                const isProfit = pnl >= 0.0;
                const profClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";

                return (
                  <tr key={index}>
                    <td>
                      <p>{stock.product || "CNC"}</p>
                    </td>
                    <td>{stock.name}</td>
                    <td>{qty}</td>
                    <td>{avg.toFixed(2)}</td>
                    <td>{price.toFixed(2)}</td>
                    <td className={profClass}>
                      {isProfit ? `+${pnl.toFixed(2)}` : pnl.toFixed(2)}
                    </td>
                    <td className={dayClass}>{stock.day || "0.00%"}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
