import React, { Component } from "react";
import Header from "../Partials/Header";
import FlashMessagesList from "../Flash/FlashMessagesList";
class Dashboard extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <FlashMessagesList />
          <div>This is the home page</div>
        </div>
      </>
    );
  }
}

export default Dashboard;
