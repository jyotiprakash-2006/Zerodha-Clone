import React from "react";
import { Link } from "react-router-dom";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center">
          <img src={imageUrl} alt={productName} className="img-fluid" style={{ maxHeight: "350px" }} />
        </div>
        <div className="col-12 col-md-6 p-4">
          <h1 className="mt-3 fw-bold">{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div className="d-flex align-items-center gap-4 mt-3">
            {tryDemo ? (
              <a href={tryDemo} style={{ textDecoration: "none" }} className="text-primary fw-semibold">
                Try Demo <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
              </a>
            ) : (
              <Link to="/product" style={{ textDecoration: "none" }} className="text-primary fw-semibold">
                Try Demo <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
              </Link>
            )}

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
          <div className="mt-4 d-flex align-items-center gap-3">
            <a href={googlePlay || "https://play.google.com/store/apps/details?id=com.zerodha.kite3"} target="_blank" rel="noreferrer">
              <img src="/media/image/googlePlayBadge.svg" alt="Google Play" style={{ height: "40px" }} />
            </a>
            <a href={appStore || "https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"} target="_blank" rel="noreferrer">
              <img src="/media/image/appstoreBadge.svg" alt="App Store" style={{ height: "40px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
