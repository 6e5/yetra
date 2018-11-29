import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="container footer-low">
      <hr />
      <h5 className="card-header">Featured</h5>
      <div className="card-body">
        <h5 className="card-title bg-secondary">Special Facebook Tool</h5>
        <p className="card-text bg-secondary">
          Supported with javascript and facebook's token.
        </p>
        <Link to="/facebook" className="btn btn-danger">
          Facebook Tool
        </Link>
      </div>
    </div>
  );
}
