import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm">
          <Link to="/viewlogs">
            <button type="button" class="btn btn-info btn-lg btn-block">
              View Logs
            </button>
          </Link>
        </div>
        <div class="col-sm">
          <Link to="/viewemployees">
            <button type="button" class="btn btn-info btn-lg btn-block">
              View Employees
            </button>
          </Link>
        </div>
        <div class="col-sm">
          <Link to="/profile">
            <button type="button" class="btn btn-info btn-lg btn-block">
              Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
