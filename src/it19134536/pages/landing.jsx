import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import home from "../stylesheets/landing.css";
// import "@fontsource/poiret-one"; // Defaults to weight 400.
// import BASEURL from '../../../../url'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.navigateToHomePage = this.navigateToHomePage.bind(this);
  }

  navigateToHomePage(e) {
    window.location = `/category-list`;
  }

  render() {
    return (
      <div className="bngImage">
        <div>
          <Row className="rowstyle">
            <Col sm="3"></Col>
            <Col className="logoBlock"></Col>
            <Col sm="3"></Col>
          </Row>
          <Row>
            <Col sm="3"></Col>
            <Col>
              {" "}
              
              
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  className="landingButton"
                  onClick={(e) => this.navigateToHomePage(e)}
                >
                  Enter to Restaurant
                </button>
              </div>
            </Col>
            <Col sm="3"></Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default LandingPage;
