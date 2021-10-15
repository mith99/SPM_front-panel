import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import DeliveryServiceCss from "../stylesheets/deliveryService.css";
import axios from "axios";

class DeliveryServicePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearching: false,
      searchKey: "",
      nicNumber: "",
      fullName: "",
      phoneNumber: "",
      address: "",
      deliveryServiceId: "",
      totalPrice:""
      
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onOrder = this.onOrder.bind(this);
    // this.onSave = this.onSave.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount(){
    const  mealId = this.props.location.state.mealId;
    const mealName = this.props.location.state.mealName;
    const mealPrice = this.props.location.state.price;
    const  mealQty = this.props.location.state.qty;

    const totalPrice = mealPrice * mealQty;
    this.setState({ totalPrice: totalPrice });
 
    // const mealPrice = 500.00;
    // const mealQty = 2;

    
    console.log("meal ID"+mealId);
    console.log(mealName);
    console.log(mealQty);
    console.log(mealPrice);
 
    
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSearch(e,key) {
    e.preventDefault();
     var searchResult = ["fws", "fdfs`"];

    //search for user details
    if (e.target.value.length != 0) {
      console.log("searching user");
    }

    //if search is sucessfull enable delete button
    if (searchResult.length != 0) {
      this.setState({
        isSearching: true,
        
      });
    }
   
   this.setState({ isSearching: true });
        axios
          .get(`http://localhost:5000/delivery-service/search-category-delivery-service/${key}`)
          .then((response) => {
            this.setState({ 
              deliveryServiceId :response.data.data[0]._id,
              nicNumber: response.data.data[0].nicNumber,
              fullName: response.data.data[0].fullName,
              phoneNumber: response.data.data[0].phoneNumber,
              address :response.data.data[0].address
            });
            console.log(response.data.data[0].address);
          });
    
        this.setState({ isSearching: false });
  }

  onSubmit(e) {
    e.preventDefault();
    // if (this.state.nicNumber.length == 0) {
    //   alert("NIC NUmber cannot be empty");
    // } else if ((this.state.fullName.length = 0)) {
    //   alert("Full name cannot be empty");
    // } else if ((this.state.phoneNumber.length = 0)) {
    //   alert("Phone number cannot be empty");
    // } else if ((this.state.address.length = 0)) {
    //   alert("address cannot be empty");
    // } else {
    //   console.log("Processing Order...");
    // }
     
    let deliveryDetails = {
        nicNumber : this.state.nicNumber,
        fullName: this.state.fullName,
        phoneNumber : this.state.phoneNumber,
        address : this.state.address,
         
    };
    console.log("delivery Details", deliveryDetails);
    axios
      .post("http://localhost:5000/delivery-service/create-delivery-service", deliveryDetails)
      .then((response) => {
        alert("Data inserted successfully");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });

  }
  onDelete(e) {
    e.preventDefault();
    if (this.state.isSearching) {
      console.log("deleting user");
    }
    
     
    axios.delete(`http://localhost:5000/delivery-service/delete-delivery-service/${this.state.deliveryServiceId}`)
    .then(response => {
        alert('Data Successfully Deleted.')
    })
    .catch(error => {
        console.log(error.message);
        alert(error.message)

    })

  }
  // onSave(e) {
  //   e.preventDefault();
  //   if (!this.state.isSearched) {
  //     console.log("Saving user...");
  //   }
  // }

  onOrder(e){
    e.preventDefault();

    let orderDetails = {
       
      address : this.state.address,
      customerName: this.state.fullName,
      phoneNumber : this.state.phoneNumber,
      nicNumber : this.state.nicNumber,
      price:this.props.location.state.qty*this.props.location.state.price,
      status:"PENDING",
      items:[{
        itemID:this.props.location.state.mealId,
	      itemName:this.props.location.state.mealName,
	      itemQuantity:this.props.location.state.qty,

      }]     
       
  };
  console.log("delivery Details", orderDetails);
  axios
    .post("http://localhost:5000/order/create-order", orderDetails)
    .then((response) => {
      alert("Data inserted successfully");
      
    })
    .catch((error) => {
      console.log(error.message);
      alert(error.message);
    });
  }


  render() {
    return (
      <div>
        <Row>
          {/* Left Hand side */}
          <Col sm="1"></Col>
          <Col sm="5">
            {/* Title */}
            <div>
              <h1 className="topicviewDelivery">Delivery Service</h1>
            </div>
            {/* Image */}
            <div className="imagebackground">
              <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/packages/lf20_oV72KM.json"
                style={{ height: "398px", width: "360px" }}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </div>
          </Col>
          {/* Right hand side */}
          <Col sm="5" className="rightCol">
            <form>
              <label className="labelText">NIC Number</label>

              <row className="d-flex justify-content-between">
                 
                <input
                  type="text"
                  id="nicNumber"
                  name="nicNumber"
                  value={this.state.nicNumber}
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
                  onClick={(e) => this.onSearch(e, this.state.nicNumber)}
                   
                >
                  Search
                </button>
              </row>
              <br />

              <Row>
                <label className="labelText">Full Name</label>

                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={this.state.fullName}
                  onChange={this.onChange}
                  className="form-control rounded"
                ></input>
              </Row>
              <br />
              <Row>
                <label className="labelText">Phone Number</label>
                <br />
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  onChange={this.onChange}
                  className="form-control rounded"
                ></input>
              </Row>
              <br />
              <Row>
                <label className="labelText">Address</label>
                <br />
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={this.state.address}
                  onChange={this.onChange}
                  className="form-control rounded"
                ></input>
              </Row>
              <br />
              <br />
              <Row>
                <Col>
                  <button
                    onClick={this.onSubmit}
                    disabled={this.state.isSearching}
                    className="btn btn-primary"
                    style={{
                      marginLeft: "8pt",
                      borderRadius: "30pt",
                      width: "107px",
                      backgroundColor: "#688CD3",
                    }}
                  >
                    Save
                  </button>
                </Col>
                <Col>
                  <button
                    onClick={this.onDelete}
                    disabled={this.state.isSearching}
                    className="btn btn-primary"
                    style={{
                      marginLeft: "8pt",
                      borderRadius: "30pt",
                      width: "107px",
                      backgroundColor: "#688CD3",
                    }}
                  >
                    Delete
                  </button>
                </Col>
                <Col>
                  <button
                    onClick={this.onOrder}
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      marginLeft: "8pt",
                      borderRadius: "30pt",
                      width: "107px",
                      backgroundColor: "#688CD3",
                    }}
                  >
                    Order
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DeliveryServicePage;