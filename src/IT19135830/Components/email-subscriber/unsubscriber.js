import React, {Component} from "react";
import { Col, Row } from "reactstrap";
import '../../StyleSheets/todaySpecials.css'
import  '../../StyleSheets/email.css'
import axios from "axios";
import moment from "moment";

class unsubscriber extends Component {
    constructor(props) {
        super(props);
        this.onChange= this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            emails:"",
            status:"unsubscribed"
        }
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();

        let mail = this.state.email


        let emailSubscriber = {
            email:this.state.email,
            status:this.state.status
        }
        console.log(emailSubscriber);

        if(this.state.email === undefined){
            alert("Please enter your email")
        }
        else {
            axios.patch(`http://localhost:5000/newsletter/unsubscribe/${mail}`)
                .then(response => {
                    alert(response.data)
                    this.setState({email: ""});
                })
                .catch(error => {
                    console.log(error.message);
                    alert(error.message);
                })
        }
    }


    render(){
        return(
            <div className='bgnd' >
                <Row>
                    <Col sm='1'></Col>
                    <Col sm='5'>
                        <h1 className='titleStyle'>Unsubscribe from Email list</h1>
                    </Col>

                </Row>
                <br/>

                <br/>

                <div className='text-center' style={{paddingTop:"2vh"}}>


                    <h3 style={{fontFamily:'Metrophobic', alignContent:'center'}}>Please enter your subscribed email</h3>

                </div>
                <Row>
                    <div className='text-center'  style={{paddingTop:"2vh"}}>
                        <Col >
                            <input
                                className="inputTextBox"
                                name="email"
                                input type="email"
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
                            >Unsubscribe</button>
                        </Col>
                    </div>
                </Row>


            </div>
        )

    }
}

export default unsubscriber

