import React from "react";
import "./css/landing_page.css";
import PointingUpIllustration from "../pic/pointing_up.svg";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="items-center">
        <p className="dev-message fn-poret-one ">
          <span>
            <span className="text-visible-off">o</span>I Do
          </span>
          UI.UX
          <br />
          Frontend & Backend
          <br />
          Web Design
        </p>
      </div>
      <div className="items-center service-button-section">
        <button className="btn-rounded-dark fn-poppins-semi-b" type="button">
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            See Services
          </Link>
        </button>
      </div>
      <div className="items-center pointer-img-section">
        <img
          src={PointingUpIllustration}
          alt="pointing up"
          width="300px"
          height="300px"
        />
      </div>
    </div>
  );
}

export default React.memo(LandingPage);
