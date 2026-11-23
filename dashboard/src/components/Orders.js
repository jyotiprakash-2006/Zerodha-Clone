import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = () => {
    axios
      .get("http://localhost:3002/allOrders")
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchOrders();

    const handleOrderPlaced = () => {
      fetchOrders();
    };

    window.addEventListener("orderPlaced", handleOrderPlaced);
    return () => {
      window.removeEventListener("orderPlaced", handleOrderPlaced);
    };
  }, []);

  if (loading) {
    return (
      <div className="orders" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <p className="text-muted">Loading your orders...</p>
      </div>
    );
  }

  if (allOrders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h3 className="title" style={{ margin: 0 }}>Orders ({allOrders.length})</h3>
        <button
          type="button"
          onClick={fetchOrders}
          className="btn btn-blue"
          style={{ fontSize: "0.8rem", padding: "6px 14px", border: "none", cursor: "pointer" }}
        >
          Refresh Orders
        </button>
      </div>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Type</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Price (₹)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => {
              const isBuy = !order.mode || order.mode.toUpperCase() === "BUY";
              const timeStr = order.createdAt
                ? new Date(order.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
                : "Just now";

              return (
                <tr key={index}>
                  <td style={{ textAlign: "left", color: "#888", fontSize: "0.8rem" }}>{timeStr}</td>
                  <td style={{ textAlign: "left" }}>
                    <span
                      style={{
                        backgroundColor: isBuy ? "#e8f0fe" : "#fce8e6",
                        color: isBuy ? "#1a73e8" : "#d93025",
                        padding: "3px 8px",
                        borderRadius: "3px",
                        fontWeight: "600",
                        fontSize: "0.75rem",
                      }}
                    >
                      {order.mode ? order.mode.toUpperCase() : "BUY"}
                    </span>
                  </td>
                  <td style={{ fontWeight: "500" }}>{order.name}</td>
                  <td>{order.qty || 1}</td>
                  <td>{Number(order.price).toFixed(2)}</td>
                  <td>
                    <span
                      style={{
                        color: "#48c237",
                        fontWeight: "500",
                        fontSize: "0.8rem",
                      }}
                    >
                      {order.status || "COMPLETE"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
