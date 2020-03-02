import React, { Fragment, Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Button, Table } from "reactstrap";
import "./style.css";

class ViewLogs extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then(result => {
        this.setState({
          users: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <Fragment>
        <div className="container mt-4">
          <div className="row header">
            <div className="col-md-9">
              <h1>View Logs</h1>
            </div>

            <div className="col-md-3">
              <Link to="/addlog">
                <Button color="primary">Add Log</Button>
              </Link>
            </div>
          </div>

          <Table hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {this.state.users.map(data => {
                return (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>
                      <Link to="/editlogs">
                        <button className="btn btn-info">Edit</button>
                      </Link>
                    </td>
                    <td>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Fragment>
    );
  }
}

export default ViewLogs;
