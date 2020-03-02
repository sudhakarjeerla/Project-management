import React, { Fragment, Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

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
        <Link to="/addlog">
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Add Log
          </button>
        </Link>
        <table className="striped">
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
                    <button class="waves-effect waves-dark btn-small blue">
                      Edit
                    </button>
                  </td>
                  <td>
                    <button class="waves-effect waves-dark btn-small red">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default ViewLogs;
