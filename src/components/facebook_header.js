import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light bg-dark bg-danger">
      <a className="navbar-brand" href="#">
        Al-King Arash - Facebook Information Gathering{" "}
        <span className="version">
          <h6>Version: 0.1</h6>
        </span>
        {/* <img
          src="https://i.imgsafe.org/d2/d2c7aac25f.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt=""
        /> */}
      </a>
    </nav>
  );
};

export default Header;
