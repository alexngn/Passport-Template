import React, { Component } from "react";
import Header from "../partials/header";
import { connect } from "react-redux";
import { CLEAR_FLASH_MESSAGE } from "../actions/flashMessage";
import FlashMessagesList from "../flash/flashMessagesList";

class Dashboard extends Component {
  componentDidMount() {
    console.log("Mounted!");
  }
  componentWillUnmount() {
    this.props.CLEAR_FLASH_MESSAGE();
    console.log("Home unmounte");
  }
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <FlashMessagesList />
          <div className="mt-3">This is the home page</div>
        </div>
      </>
    );
  }
}

export default connect(null, { CLEAR_FLASH_MESSAGE })(Dashboard);
