import React, { Component } from "react";
import axios from "axios";

class UserComponent extends Component {
  state = {
    id: this.props.match.params.id,
    persons: [],
    error: false,
    loading: true,
  };

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then((res) => {
        console.log("res:", res);
        this.setState({ persons: res.data, loading: false }, () => {
          console.log("state: ", this.state.persons);
        });
      })
      .catch((error) => {
        this.setState({ error: true, loading: false });
      });

    console.log(this.state.persons);
  }
  render() {
    return (
      <div>
        SingleUser: {this.state.id}
        {this.state.persons.name}
        {this.state.persons.email}
        {this.state.persons.phone}
        {this.state.persons.username}
        {/* <button
          className="btn btn-success"
          onClick={() => this.component(this.state.id)}
        >
          View
        </button> */}
      </div>
    );
  }
}

export default UserComponent;
