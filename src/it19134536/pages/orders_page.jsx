import React from "react";
import { Container, Row, Col, Table } from "reactstrap";
import OrderServiceCss from "../stylesheets/orderService.css";
import axios from "axios";

class OrdersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
      isSearching:false,
      searchKey: "",
      orderId:"",
      status:"",
      orders:[]

    };

    this.onSearch = this.onSearch.bind(this);
    this.onAcceptClick = this.onAcceptClick.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  componentDidMount() {}

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSearch(e,key) {
    // if (this.state.searchKey.length != 0) {
      console.log("searching...");
      this.setState({ isSearching: true });
        axios
          .get(`http://localhost:5000/order/get-customer-orders/${key}`)
          .then((response) => {
            this.setState({ 
              orders: response.data.data,
               
            
            });
            console.log("orders :"+this.state.orders);
          });
    
        this.setState({ isSearching: false });
    // }
  }

  onAcceptClick(e,key) {
    console.log("accepting latest order...");
    axios
      .put(
        `http://localhost:5000/order/update-order-delevety-status/${key}`
         
      )
      .then((response) => {
        alert("Data updated successfully");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }

  render() {
    return (
      <Container>
        {/* Header parts */}
        <Row>
          {/* Title */}
          <Col>
            <h1 className="topicviewOrder">Past Orders</h1>
          </Col>

          {/* Search box */}
          <Col
            style={{
              marginTop: "35pt",
            }}
          >
            <row className="d-flex justify-content-between">
              
              <input
                  type="text"
                  id="searchKey"
                  name="searchKey"
                  value={this.state.searchKey}
                  onChange={this.onChange}
                  className="form-control rounded"
                  style={{
                    borderRadius: "107px",
                  }}
                ></input>

              <button
                type="button"
                className="btn btn-primary"
                style={{
                  marginLeft: "8pt",
                  borderRadius: "30pt",
                  width: "107px",
                  backgroundColor: "#688CD3",
                }}
                onClick={(e) => this.onSearch(e, this.state.searchKey)}
              >
                Search
              </button>
            </row>
          </Col>
        </Row>

        {/* Accept button */}
        <Row>
          <Col>
            <button
              onClick={(e) => this.onAcceptClick(e, this.state.searchKey)}
               
              className="btn btn-primary"
              style={{
                borderRadius: "30pt",
                backgroundColor: "#44AA4E",
                marginTop: "20pt",
                width: "200px",
              }}
            >
              Accept Latest order
            </button>
          </Col>
        </Row>

        <br></br>
        {/* Table of data */}
        <Row>
          <Col>
            <Table>
              <tr
                style={{
                  backgroundColor: "#8DBACD",
                  lineHeight: "50px",
                  textAlign: "leftAlign",
                }}
              >
                <th>Order ID</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
              {this.state.orders.length > 0 && this.state.orders.map((item, index) => (
              <tr key ={index}>
                <td>{item._id}</td>
                <td>{item.price}</td>
                <td>{item.status}</td>
              </tr>
                ))}
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OrdersPage;
