import React from "react";
import Menu from "./Menu";

function Base({
  title = "My Title",
  description = "My description",
  className = "bg-dark text-white my-5",
  children,
}) {
  return (
    <div>
      <Menu />
      <div className="container-fluid">
        <div className="jumbotron bg-dark text-white text-center">
          <h3 className="display-5">{title}</h3>
          <p className="lead my-0">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer className="footer bg-dark mt-auto">
        <div className="container-fluid bg-secondary text-white text-center py-2 d-flex justify-content-around">
          <h4>Copyright 2021 © All wrong reserved</h4>
          <button className="btn btn-warning btn-sm">Contact Us</button>
        </div>
      </footer>
    </div>
  );
}

export default Base;
