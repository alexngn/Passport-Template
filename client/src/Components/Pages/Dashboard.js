import React, { Component } from "react";
import Header from "../Partials/Header";
import { connect } from "react-redux";
import { CLEAR_FLASH_MESSAGE } from "../actions/FlashMessage";
import FlashMessagesList from "../Flash/FlashMessagesList";
import axios from "axios";
class Dashboard extends Component {
  componentDidMount() {
    console.log("Mounted!");
  }
  componentWillUnmount() {
    console.log("Home unmounte");
    this.props.CLEAR_FLASH_MESSAGE();
  }
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <FlashMessagesList />
          <div className="mt-3">This is the home page</div>
          <button onClick={() => axios.get("http://localhost:3001/logout")}>
            Logout
          </button>
        </div>
      </>
    );
  }
}

export default connect(null, { CLEAR_FLASH_MESSAGE })(Dashboard);
