import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sync auth state across events and tabs
  useEffect(() => {
    const checkAuth = () => {
      try {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");
        setUser(storedUser ? JSON.parse(storedUser) : null);
        setToken(storedToken);
      } catch {
        setUser(null);
        setToken(null);
      }
    };

    window.addEventListener("authChange", checkAuth);
    window.addEventListener("storage", checkAuth);
    return () => {
      window.removeEventListener("authChange", checkAuth);
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
    window.dispatchEvent(new Event("authChange"));
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getDashboardUrl = () => {
    if (token && user) {
      return `http://localhost:3001?token=${token}&user=${encodeURIComponent(JSON.stringify(user))}`;
    }
    return "http://localhost:3001";
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "#FFF", zIndex: 1000 }}
    >
      <div className="container py-2 position-relative">
        {/* Brand Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/media/image/logo.svg"
            alt="Zerodha"
            style={{ width: "130px" }}
          />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-center mb-2 mb-lg-0 gap-2">
            {/* Signup Link (if not logged in) */}
            {!user && (
              <li className="nav-item">
                <Link className="nav-link text-muted fw-semibold" to="/signup">
                  Signup
                </Link>
              </li>
            )}

            {/* Main Nav Links */}
            <li className="nav-item">
              <Link className="nav-link text-muted fw-semibold" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-muted fw-semibold" to="/product">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-muted fw-semibold" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-muted fw-semibold" to="/support">
                Support
              </Link>
            </li>

            {/* Direct Kite Dashboard link if logged in */}
            {user && (
              <li className="nav-item">
                <a
                  href={getDashboardUrl()}
                  className="btn btn-outline-primary btn-sm px-3 fw-semibold"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fa-solid fa-chart-line me-1"></i> Kite Dashboard
                </a>
              </li>
            )}

            {/* Login / Logout button placed directly with / above 3-slide icon section */}
            <li className="nav-item">
              {user ? (
                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-light text-dark border px-2 py-1">
                    👤 {user.username || "User"}
                  </span>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger fw-semibold px-2 py-1"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  className="btn btn-primary btn-sm px-3 fw-semibold text-white text-decoration-none"
                  to="/login"
                >
                  Login
                </Link>
              )}
            </li>

            {/* 3-slide Hamburger Menu Icon */}
            <li className="nav-item position-relative">
              <button
                type="button"
                className="btn btn-link nav-link text-muted p-2 border-0"
                onClick={toggleMenu}
                title="Menu"
                style={{ cursor: "pointer" }}
              >
                <i className="fa-solid fa-bars fs-5"></i>
              </button>

              {/* 3-slide Dropdown Menu */}
              {isMenuOpen && (
                <div
                  className="position-absolute end-0 mt-2 p-3 bg-white shadow rounded border"
                  style={{
                    width: "280px",
                    zIndex: 1050,
                  }}
                >
                  {/* Login button placed above / at top of menu as required */}
                  <div className="mb-3 pb-2 border-bottom text-center">
                    {user ? (
                      <div>
                        <p className="mb-1 text-muted small">Logged in as</p>
                        <h6 className="fw-bold mb-2">{user.username}</h6>
                        <a
                          href={getDashboardUrl()}
                          className="btn btn-primary btn-sm w-100 mb-2"
                        >
                          Open Kite Dashboard
                        </a>
                        <button
                          className="btn btn-outline-secondary btn-sm w-100"
                          onClick={() => {
                            setIsMenuOpen(false);
                            handleLogout();
                          }}
                        >
                          Logout
                        </button>
                      </div>
                    ) : (
                      <div>
                        <p className="mb-2 text-muted small">Access your account</p>
                        <Link
                          to="/login"
                          className="btn btn-primary btn-sm w-100 mb-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Login to Kite
                        </Link>
                        <Link
                          to="/signup"
                          className="btn btn-outline-primary btn-sm w-100"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Open Account (Sign Up)
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Menu Ecosystem Links */}
                  <div className="row g-2 text-center" style={{ fontSize: "12px" }}>
                    <div className="col-6">
                      <a
                        href={getDashboardUrl()}
                        className="d-block p-2 text-decoration-none text-dark bg-light rounded"
                      >
                        <i className="fa-solid fa-chart-pie text-primary d-block fs-5 mb-1"></i>
                        Kite
                      </a>
                    </div>
                    <div className="col-6">
                      <Link
                        to="/product"
                        className="d-block p-2 text-decoration-none text-dark bg-light rounded"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <i className="fa-solid fa-terminal text-info d-block fs-5 mb-1"></i>
                        Console
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link
                        to="/product"
                        className="d-block p-2 text-decoration-none text-dark bg-light rounded"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <i className="fa-solid fa-coins text-warning d-block fs-5 mb-1"></i>
                        Coin
                      </Link>
                    </div>
                    <div className="col-6">
                      <a
                        href="https://zerodha.com/varsity"
                        target="_blank"
                        rel="noreferrer"
                        className="d-block p-2 text-decoration-none text-dark bg-light rounded"
                      >
                        <i className="fa-solid fa-graduation-cap text-success d-block fs-5 mb-1"></i>
                        Varsity
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
