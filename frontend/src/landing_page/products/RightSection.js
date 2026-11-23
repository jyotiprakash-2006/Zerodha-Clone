import React from "react";
import { Link } from "react-router-dom";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 p-4">
          <h1 className="mt-3 fw-bold">{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div className="mt-3">
            {learnMore ? (
              <a href={learnMore} style={{ textDecoration: "none" }} className="text-primary fw-semibold">
                Learn More <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
              </a>
            ) : (
              <Link to="/about" style={{ textDecoration: "none" }} className="text-primary fw-semibold">
                Learn More <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
              </Link>
            )}
          </div>
        </div>

        <div className="col-12 col-md-6 text-center">
          <img src={imageUrl} alt={productName} className="img-fluid" style={{ maxHeight: "350px" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
