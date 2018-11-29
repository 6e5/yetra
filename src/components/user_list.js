import React, { Component } from "react";
import { connect } from "react-redux";

class UserList extends Component {
  renderUsers(user) {
    const name = user.name;
    return (
      <tr key={name}>
        <td>
          <img src={user.picture.data.url} />
        </td>
        <td>{name}</td>
        <td>{user.mobile_phone}</td>
        <td>{user.email}</td>
      </tr>
    );
  }
  render() {
    console.log(this.props.users);
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{this.props.users.map(this.renderUsers)}</tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(UserList);
