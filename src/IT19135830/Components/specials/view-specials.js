import React, {Component} from "react";
import { Col, Row } from "reactstrap";
import '../../StyleSheets/todaySpecials.css'
import axios from "axios";
import moment from "moment";

class viewSpecials extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.search =  this.search.bind(this);
        this.state = {
            specials:[],
            specialsLen:0,
            search:'',
        }
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }


    componentDidMount() {
        let date = moment(new Date()).format("YYYY-MM-DD");
        console.log(date);
        axios.get(`http://localhost:5000/user/get-todays-special-dishes/${date}`)
            .then((response) => {
                this.setState({specials: response.data.data});
                this.setState({specialsLen: this.state.specials.length})
            });


    }

    search(e,keyword){
        console.log(keyword)
        let date = moment(new Date()).format("YYYY-MM-DD");
        console.log(date)
        axios.get(`http://localhost:5000/user/get-todays-special-dishes/${date}/${keyword}`)
            .then((response) => {
                this.setState({specials: response.data.data});
                console.log(this.state.specials);
            });


    }

    render(){
        return(
            <div className='bgnd' style={{background:'#E5E5E5', maxHeight:'100vh'}}>
                <Row>
                    <Col sm='1'></Col>
                    <Col sm='4'>
                        <h1 className='titleStyle'>Today's Specials</h1>
                    </Col>
                    <Col sm ='3'></Col>
                    <Col sm='3'>
                        <div className="input-group" style={{marginTop:'3vh'}}>
                            <input type="search"
                                   className="form-control rounded"
                                   placeholder="Search"
                                   name='search'
                                   aria-label="Search"
                                   aria-describedby="search-addon"
                                   value={this.state.search}
                                   onChange={this.onChange}
                            />

                            <button type="button"
                                    className="btn btn-primary"
                                    onClick={(e) =>
                                        this.search(e, this.state.search)
                                    }
                            >Search
                            </button>
                        </div>
                        </Col>
                </Row>

                    <Col sm = '2'></Col>
                <Col>
                    <div className='container'>
                        {this.state.specials.length > 0 && this.state.specials.map(((item, index) => (
                            <div
                                className="card text-dark bg-lightbg-light mb-3 "
                                style={{ marginTop: "20pt" }}
                            >
                                <Row>
                                    <Col sm='1'> </Col>
                                    <Col sm="3">
                                        <img
                                            src={item.image}
                                            alt="item image"
                                            className="dishImage"
                                        />
                                    </Col>
                                    <Col sm='7'>
                                    <h3 className="titletext">
                                        {item.dishName}
                                    </h3>

                                        <h3 className="dishDesc">
                                            {item.description}
                                        </h3>
                                        <Row>
                                        <h3 className="price">
                                            Price - {item.price} LKR
                                        </h3></Row>
                                    </Col>
                                </Row>

                            </div>
                        )))}
                    </div>
                </Col>
                <Col sm = '2'></Col>

                <Row>

                </Row>
            </div>
        )

    }
}

export default viewSpecials

