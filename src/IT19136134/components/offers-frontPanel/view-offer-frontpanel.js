import { Component } from "react";
import axios from "axios";
import { Col, Row } from "reactstrap";
import ViewOffersFrontPanelCss from "../../styleSheets/viewOffersFrontPanel.css";

class ViewOffersFrontPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offers: [],
      searchKey: "",
      isSearching: false,
    };
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:5000/offer/").then((response) => {
      this.setState({ offers: response.data.data });
    });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  search(e, key) {
    this.setState({ isSearching: true });
    axios
      .get(`http://localhost:5000/offer/searchOffer/${key}`)
      .then((response) => {
        this.setState({ offers: response.data.data });
      });

    this.setState({ isSearching: false });
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm="1"></Col>
          <Col sm="10">
            <Row>
              <div className="container">
                <row className="d-flex justify-content-between">
                  <h1 className="topicviewOffer">Offers</h1>
                  <div
                    className="input-group"
                    style={{
                      marginTop: "20pt",
                      marginBottom: "20pt",
                      marginLeft: "50%",
                      marginRight: "0pt",
                    }}
                  >
                    <input
                      type="search"
                      className="form-control rounded"
                      placeholder="Search"
                      name="searchKey"
                      aria-label="Search"
                      aria-describedby="search-addon"
                      value={this.state.searchKey}
                      onChange={this.onChange}
                    />

                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={(e) => this.search(e, this.state.searchKey)}
                    >
                      Search
                    </button>
                  </div>
                </row>
                {this.state.offers.length > 0 &&
                  this.state.offers.map((item, index) => (
                    <div
                      key={index}
                      className="card text-dark bg-lightbg-light mb-3 "
                      style={{ marginTop: "20pt" }}
                    >
                      <div className="card-body">
                        <Row>
                          <Col sm="3">
                            <img
                              src={item.image}
                              alt="item image"
                              className="imageBoxOffer"
                            />
                          </Col>
                          <Col sm="9">
                            <Row>
                              <Col sm="6">
                                <h4 className="offerNamefont">
                                  {item.offerName}
                                </h4>
                                <h5 className="offerDetails">
                                  {item.description}
                                </h5>
                                <br />
                                <h6 className="offerDetails">
                                  Starting from : {item.startDate} -{" "}
                                  {item.endDate}
                                </h6>

                                <p className="paraTerms">
                                  Terms and conditions apply
                                </p>
                              </Col>
                              <Col sm="4">
                                {" "}
                                <br />
                                <h5 className="priceDiscount">
                                  {item.discount}% discount
                                </h5>
                                <br />
                                <h5 className="priceNew">New Price</h5>
                                <h5 className="priceNew">
                                  Rs.{item.price} only
                                </h5>
                              </Col>
                              <Col sm="1"></Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  ))}
              </div>
            </Row>
          </Col>
          <Col sm="1"></Col>
        </Row>
      </div>
    );
  }
}

export default ViewOffersFrontPanel;
