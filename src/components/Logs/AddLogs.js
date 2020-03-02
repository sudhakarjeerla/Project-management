import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
class AddLogs extends Component {
  render() {
    return (
      <section>
        <div class="container mt-4" >
          <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-8 col-xl-6">
              <div class="row">
                <div class="col text-center">
                  <h1 className="addLogs">AddLogs</h1>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col mt-4">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div class="row align-items-center mt-4">
                <div class="col">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="row justify-content-start">
                <div class="col">
                  <Link to="/viewlogs"><button class="btn btn-success mt-4  btn-lg">Add Log</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AddLogs;
