import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("user");
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch {
      setUser(null);
    }
  }, []);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "http://localhost:3000/login";
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const getInitials = (name) => {
    if (!name) return "ZU";
    return name.slice(0, 2).toUpperCase();
  };

  const username = user?.username || "Trader";
  const email = user?.email || "trader@zerodha.local";

  return (
    <div className="menu-container position-relative">
      <Link to="/" style={{ textDecoration: "none" }}>
        <img src="logo.png" alt="Logo" style={{ width: "45px", cursor: "pointer" }} />
      </Link>

      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              <p className={location.pathname === "/" ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders">
              <p className={location.pathname === "/orders" ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings">
              <p className={location.pathname === "/holdings" ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions">
              <p className={location.pathname === "/positions" ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds">
              <p className={location.pathname === "/funds" ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps">
              <p className={location.pathname === "/apps" ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <div className="profile" onClick={handleProfileClick} style={{ position: "relative" }}>
          <div className="avatar">{getInitials(username)}</div>
          <p className="username">{username}</p>

          {/* Profile Dropdown Menu */}
          {isProfileDropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "45px",
                right: "0",
                width: "230px",
                background: "#ffffff",
                boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                borderRadius: "4px",
                border: "1px solid #e0e0e0",
                zIndex: 1000,
                padding: "16px",
                textAlign: "left",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ borderBottom: "1px solid #f0f0f0", paddingBottom: "10px", marginBottom: "10px" }}>
                <p style={{ margin: 0, fontWeight: "600", fontSize: "0.9rem", color: "#333" }}>{username}</p>
                <p style={{ margin: 0, fontSize: "0.75rem", color: "#888", wordBreak: "break-all" }}>{email}</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem" }}>
                <a
                  href="http://localhost:3000"
                  style={{ color: "#4184f3", textDecoration: "none" }}
                >
                  &larr; Zerodha Main Site
                </a>
                <Link
                  to="/funds"
                  style={{ color: "#555", textDecoration: "none" }}
                  onClick={() => setIsProfileDropdownOpen(false)}
                >
                  Funds &amp; Account
                </Link>
                <Link
                  to="/orders"
                  style={{ color: "#555", textDecoration: "none" }}
                  onClick={() => setIsProfileDropdownOpen(false)}
                >
                  Order History
                </Link>
              </div>

              <div style={{ borderTop: "1px solid #f0f0f0", marginTop: "12px", paddingTop: "10px" }}>
                <button
                  type="button"
                  onClick={handleLogout}
                  style={{
                    width: "100%",
                    background: "#fdf2f2",
                    color: "#d93025",
                    border: "1px solid #fad2cf",
                    padding: "8px",
                    borderRadius: "4px",
                    fontWeight: "600",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                  }}
                >
                  <i className="fa-solid fa-arrow-right-from-bracket me-1"></i> Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
