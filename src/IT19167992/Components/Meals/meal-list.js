import React, { Component } from 'react';
import axios from 'axios';
import { Col, Row } from "reactstrap";
import FormCss from '../../Stylesheets/form.css';

class MealList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meals : [],
            categoryId:'',
            searchKey: "",
            isSearching: false,
            
        }
        this.navigateToSingleMealPage = this.navigateToSingleMealPage.bind(this);
        this.search=this.search.bind(this);
        this.onChange=this.onChange.bind(this);

    }

    componentDidMount(){
        const categoryIdentification = this.props.location.state.categoryId
        axios.get(
            
            `http://localhost:5000/meal/getCategoryForMeal/${categoryIdentification}`
            )
        .then(response => {
            this.setState({ meals : response.data.data });
        })
   
    }
    navigateToSingleMealPage(e, mealId) {
        // window.location = `/edit-delete-meal/${mealId}`;
        let data = {
          mealId: mealId
      }
      this.props.history.push("/single-meal", data)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    search(e, key) {
        this.setState({ isSearching: true });
        axios
          .get(`http://localhost:5000/meal/search-meal/${key}`)
          .then((response) => {
            this.setState({ meals: response.data.data });
            console.log(response.data.data);
          });
    
        this.setState({ isSearching: false });
      }
     

    render() {
        return (
            <diV>
                <Row>
                    <Col sm="1" ></Col>
                    <Col sm="3">
                        <h1 className="topicviewCategory">Meals</h1>
                    </Col>
                    <Col sm="3" ></Col>
                    <Col sm="3">
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
                    </Col>
                </Row>
                <div className="products">
                    {this.state.meals.length > 0 && this.state.meals.map((item, index) => (
                        <div key={index} className='card mb-3' onClick={e => this.navigateToSingleMealPage(e, item._id)}>
                            <div className="p-3">
                                <img
                                    src={item.image}
                                    alt="item image"
                                    className="imageBoxNew"
                                />
                                <h4 className="categoryNamefont">{item.mealName}</h4>


                            </div>
                        </div>
                    ))}
                </div>
            </diV>
        )
    }

}

export default MealList;