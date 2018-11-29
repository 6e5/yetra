import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../actions/index";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      token: ""
    };
    this.onIdChange = this.onIdChange.bind(this);
    this.onTokenChange = this.onTokenChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onIdChange(e) {
    this.setState({ id: e.target.value });
  }
  onTokenChange(e) {
    this.setState({ token: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchUser(this.state.token, this.state.id);
    this.setState({ id: "" });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="input-group">
        <input
          type="text"
          onChange={this.onTokenChange}
          name="token"
          className="form-control"
          placeholder="Token..."
        />
        <input
          type="text"
          onChange={this.onIdChange}
          name="id"
          value={this.state.id}
          className="form-control"
          placeholder="User ID..."
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
