import React, { Component } from "react";
import { Col, Row , Modal, Card, Button} from "reactstrap";
import axios from "axios";
import FormCss from '../../Stylesheets/form.css';
 
 

class SingleMeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closeModal:'',
      mealId:'',
      mealName : '',
      price : '',
      description : '',
      qty:0,
     
      selectedFile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgC4RszYZwlndjEI41DS3tay-AFYmGK2s8cEaGYRffLzFwYnOk4psE3eAYLiUrsUw4_Q8&usqp=CAU",

      oldCatergories: "",
      catergories: [],
      optionsCatergories: [],
      selectedCatergories: "",
     
    };

    this.setSelectImageFile = this.setSelectImageFile.bind(this);
    this.onChange = this.onChange.bind(this);
    
  }

  componentDidMount() {
    const mealIdentification = this.props.location.state.mealId
    console.log(this.props.match.params.id);
    axios
      .get(
        `http://localhost:5000/meal/getMealById/${mealIdentification}`
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          mealName: response.data.meals.mealName,
          price: response.data.meals.price,
          description: response.data.meals.description,
          catergories :response.data.meals.categories,
          selectedFile: response.data.meals.image,
        });
      })
      .catch((error) => {
        alert(error.message);
      });

     
     

     
  }

  setSelectImageFile = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file.target.files[0]);
      reader.onload = () => {
        console.log(reader.result);
        this.setState({
          selectedFile: reader.result,
        });
      };
    });

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  navigateToOrder(e, qty, price) {
    // window.location = `/edit-delete-meal/${mealId}`;
    let data = {
      qty: qty,
      price: price,

    }
    this.props.history.push("/delivery-service", data)
  }

   

  render() {
    return (
      <div>
         
           <img
                  src={this.state.selectedFile}
                  alt="item image"
                  className="singleMealImage"
                />
        <div className="mealView">
          <h1 className="singleMealName">{this.state.mealName}</h1>
          <h1 className="mealDetails">{this.state.description}</h1>
          <h1 className="mealDetails">{this.state.price}</h1>
        </div>
        <Row className="foo">
          <Col sm="4"></Col>
          <Col sm="1">
          <input
              className="inputTextBox"
              name="qty"
              type={Number}
              value={this.state.qty}
              onChange={this.onChange}
              required
            ></input>

          </Col>
          <Col sm="2">
            <h1 className="qtyTxt">Quantity</h1>
          </Col>
          
          <Col sm="3"> 
          <button 
                  className="btn"
                  onClick={this.navigateToOrder}
          >
                  Order
           </button>
          </Col>

        </Row>
         
      
      </div>
    );
  }
}

export default SingleMeal;