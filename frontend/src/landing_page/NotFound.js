import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container p-5 mb-5 mt-2">
      <div className="row text-center mt-3">
        <h1 className="mt-5 fw-bold">404 Not Found</h1>
        <p className="lead mt-2 text-muted">
          Sorry, the page you are looking for does not exist.
        </p>

        <div className="d-flex justify-content-center gap-3 mt-3 mb-5">
          <Link
            to="/"
            className="p-3 btn btn-outline-primary fs-6"
            style={{ minWidth: "150px" }}
          >
            Go to Home
          </Link>
          <Link
            to="/signup"
            className="p-3 btn btn-primary fs-6 text-white"
            style={{ minWidth: "150px" }}
          >
            Sign up Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
