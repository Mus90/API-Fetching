import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import axios from "axios";
import "./Persons.scss";

class PersonComponent extends Component {
  state = {
    //initial state
    persons: [],
    error: false,
    loading: true,
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("res:", res);
        this.setState({ persons: res.data, loading: false }, () => {
          console.log("state: ", this.state.persons);
        });
      })
      .catch((error) => {
        this.setState({ error: true, loading: false });
      });
  }

  viewUser(id) {
    this.props.history.push(`/user/${id}`);
  }

  render() {
    const persons = this.state.persons;
    // [1,2,3,4,5]   0 1 2 3 4 5 6 // [] >> empty
    return (
      <div className="PersonView">
        <ul>
          {!this.state.error &&
            persons.map((person) => (
              <li key={person.id}>
                <span>name : {person.name || "N/A"}</span>
                <span>email : {person.email || "N/A"}</span>
                <span>phone : {person.phone || "N/A"}</span>
                <span>username : {person.username || "N/A"}</span>
                {/* <a
                  href="https://www.aot-musatafa.com/id"
                  className="navbar-brand"
                >
                  Go
                </a> */}
                <button
                  className="btn btn-success"
                  onClick={() => this.viewUser(person.id)}
                >
                  View
                </button>
              </li>
            ))}
        </ul>
        {this.state.error && <p>some error happened :( </p>}
        {this.state.loading && <Loader />}
      </div>
    );
  }
}

export default PersonComponent;
