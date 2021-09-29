import { Component } from "react";
import axios from "axios";
import { Col, Row } from "reactstrap";
import FormCss from '../../Stylesheets/form.css';
 

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
        categories: [],
        searchKey: "",
        isSearching: false,
    };
    this.navigateToMealsList = this.navigateToMealsList.bind(this);
    this.search=this.search.bind(this);
    this.onChange=this.onChange.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:5000/category/getAllCategories").then((response) => {
      this.setState({ categories: response.data.data });
    });
  }

  navigateToMealsList(e, categoryId) {
    //  window.location = `/edit-delete-category/${categoryId}`;
    let data = {
      categoryId: categoryId
  }
  this.props.history.push("/meal-list", data)
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  search(e, key) {
    this.setState({ isSearching: true });
    axios
      .get(`http://localhost:5000/category/search-category/${key}`)
      .then((response) => {
        this.setState({ categories: response.data.data });
        console.log(response.data.data);
      });

    this.setState({ isSearching: false });
  }

  render() {
    return (
      <div>
         
        <diV>
          <Row>
            <Col sm="1" ></Col>
          <Col sm="3">  
          <h1 className="topicviewCategory">Categories</h1>
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
          <Row>
          <div className="products">
            {this.state.categories.length > 0 && this.state.categories.map((item, index) => (
              
            <div key={index} className='card mb-3'>
              <div className="p-3" onClick={e => this.navigateToMealsList(e, item._id)}>
              <img
                              src={item.image}
                              alt="item image"
                              className="imageBoxNew"
                            />
                <h4 className="categoryNamefont"> {item.categoryName}</h4>
                
              </div>
            </div>
           
          ))}
           </div>
           </Row>
        
        </diV>
      </div>

    );
  }
}

export default Category;