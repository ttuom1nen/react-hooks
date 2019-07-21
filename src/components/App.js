import React, { Component } from "react";

export default class App extends Component {
  state = { resource: "posts" };
  render() {
    return (
      <div>
        <div>
          <button
            style={{ display: "inline-block", margin: "4px" }}
            className="uk-button uk-button-default"
            onClick={() => this.setState({ resource: "posts" })}
          >
            Posts
          </button>
          <button
            style={{ display: "inline-block", margin: "4px" }}
            className="uk-button uk-button-default"
            onClick={() => this.setState({ resource: "todos" })}
          >
            Todos
          </button>
        </div>
        {this.state.resource}
      </div>
    );
  }
}
