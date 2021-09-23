import React, {Component} from "react";
import { Col, Row } from "reactstrap";
import '../../StyleSheets/todaySpecials.css'
import  '../../StyleSheets/email.css'
import axios from "axios";
import moment from "moment";

class subscriber extends Component {
    constructor(props) {
        super(props);
        this.onChange= this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            emails:"",
            status:"subscribed"
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();

        let emailSubscriber = {
            email:this.state.email,
            status:this.state.status
        }

        console.log(emailSubscriber);

        axios.post('http://localhost:5000/newsletter/subscribe', emailSubscriber)
            .then(response => {
                alert("Successfully Subscribed");
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            })
    }


    render(){
        return(
            <div className='bgnd' >
                <Row>
                    <Col sm='1'></Col>
                    <Col sm='5'>
                        <h1 className='titleStyle'>Subscribe to Emails</h1>
                    </Col>

                </Row>
                <br/>

                <Row >
                    <Col sm='1'></Col>
                    <Col sm='11'>
                    <h1 className='emailTopic text-center'>Subscribe to our newsletter and be the first to know about our </h1>
                     <h1 className='emailTopic text-center'> latest offers, events and more! </h1>
                    </Col>
                </Row>


                <br/>

                <div className='text-center'>

                <Row>
                    <Col sm='10'>
                        <h3 style={{fontFamily:'Metrophobic', alignContent:'center', marginLeft:'80vh'}}>Please enter your Email to Subscribe</h3>
                    </Col>
                </Row>
                </div>
                    <Row>
                        <div className='text-center'>
                        <Col >
                            <input
                                className="inputTextBox"
                                name="email"
                                value={this.state.email}
                                onChange={this.onChange}
                                required
                            ></input>
                        </Col>
                        </div>
                    </Row>
                <Row>
                    <div className='text-center'>
                        <br/>
                    <Col sm='12'>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.onSubmit}
                        >Subscribe</button>
                    </Col>
                    </div>
                </Row>
            </div>
        )

    }
}

export default subscriber

