import React from "react";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { Link } from "react-router-dom";


const UserDashBoard = () => {

  const {user} = isAuthenticated();

  return (
    <Base title={`Welcome ${user.name}`} description="Your Details">
      <div className="card mb-4 text-dark">
        <h4 className="card-header">User Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge badge-danger mr-2">Name: </span> {user.name}
          </li>
          <li className="list-group-item">
            <span className="badge badge-danger mr-2">Email: </span> {user.email}
          </li>
          <li className="list-group-item">
            <span className="badge badge-success">User Area</span> {user.role === 1 ? "Admin" : "User"}
          </li>
          <li className="list-group-item">
              <div className="row">
                <div className="col-md-4">
                  <Link className="btn btn-warning w-100" to={'/'}>Update Your Details</Link>
                </div>
                <div className="col-md-4">
                  <Link className="btn btn-success w-100" to={'/'}>Go To Shop</Link>
                </div>
                <div className="col-md-4">
                  <Link className="btn btn-info w-100" to={'/cart'}>Your Cart</Link>
                </div>
              </div>
          </li>
        </ul>
      </div>
    </Base>
  );
};

export default UserDashBoard;
