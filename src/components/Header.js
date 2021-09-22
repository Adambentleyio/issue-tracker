import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div>
      <div style={{ marginTop: "15px" }} className="ui secondary menu pointing">
        <Link className="item" to="/">
          All Issues
        </Link>
        <Link className="item" to="/issue/new">
          Create Issue
        </Link>
        <div className="right menu">
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Header;
