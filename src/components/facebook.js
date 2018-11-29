import React, { Component } from "react";
import Header from "././facebook_header";
import SearchBar from "./search_bar";
import UserList from "./user_list";

export default class Facebook extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <UserList />
      </div>
    );
  }
}
