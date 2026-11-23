import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, initialMode = "BUY", defaultPrice = 0 }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(defaultPrice || 100.0);
  const [mode, setMode] = useState(initialMode);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { closeBuyWindow } = useContext(GeneralContext);

  const isBuy = mode === "BUY";
  const marginRequired = (Number(stockQuantity) * Number(stockPrice)).toFixed(2);

  const handleOrderSubmit = async (e) => {
    if (e) e.preventDefault();
    if (stockQuantity <= 0 || stockPrice <= 0) {
      alert("Please enter valid quantity and price.");
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: mode,
      });

      window.dispatchEvent(new Event("orderPlaced"));
      closeBuyWindow();
    } catch (err) {
      console.error("Order execution failed:", err);
      alert("Failed to place order. Ensure backend server is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancelClick = (e) => {
    if (e) e.preventDefault();
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window">
      <div className="header" style={{ backgroundColor: isBuy ? "#4184f3" : "#ff5722" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ margin: 0 }}>
            {mode} {uid} <span style={{ fontSize: "0.8rem", opacity: 0.9 }}>x NSE</span>
          </h3>
          <div>
            <button
              type="button"
              onClick={() => setMode("BUY")}
              style={{
                background: isBuy ? "#fff" : "transparent",
                color: isBuy ? "#4184f3" : "#fff",
                border: "1px solid #fff",
                borderRadius: "3px",
                padding: "2px 8px",
                marginRight: "6px",
                fontSize: "0.75rem",
                cursor: "pointer",
                fontWeight: isBuy ? "bold" : "normal",
              }}
            >
              BUY
            </button>
            <button
              type="button"
              onClick={() => setMode("SELL")}
              style={{
                background: !isBuy ? "#fff" : "transparent",
                color: !isBuy ? "#ff5722" : "#fff",
                border: "1px solid #fff",
                borderRadius: "3px",
                padding: "2px 8px",
                fontSize: "0.75rem",
                cursor: "pointer",
                fontWeight: !isBuy ? "bold" : "normal",
              }}
            >
              SELL
            </button>
          </div>
        </div>
      </div>

      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required: ₹{marginRequired}</span>
        <div>
          <button
            type="button"
            className="btn"
            style={{
              backgroundColor: isBuy ? "#4184f3" : "#ff5722",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleOrderSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Placing..." : mode}
          </button>
          <button
            type="button"
            className="btn btn-grey"
            style={{ border: "none", cursor: "pointer" }}
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
