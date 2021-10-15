import React, {Component} from "react";
import axios from "axios";
import {Button, Col, Modal, Row} from "reactstrap";
import '../stylesheets/feedback.css'

const initialState = {
    orderId:'',
    feedbackBody:'',
    date:''
}


class CreateFeedback extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = initialState;
    }


    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }



    onSubmit(e){
        e.preventDefault();

        let date = new Date();


        let feedback = {
            order: this.state.orderId,
            message: this.state.feedbackBody,
            date: date
        }

        console.log(feedback);

        axios.post('http://localhost:5000/feedback/create-feedbacks', feedback)
            .then(response => {
                alert('Data Successfully inserted')
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            })
    }


    render() {
        return(
            <div>
                <Row className="backgroundRowImageOffer">
                    <Col sm="2"></Col>
                    <Col sm="8">
                        <Row>

                            <h1 className='titleStyle' style={{opacity:'100%'}}>Customer Feedback</h1>
                            <br/>
                            <br/>
                            <div className="container">

                                <div className="card-body">
                                    <Row style={{
                                        paddingTop:'7vh', 
                                        paddingLeft:'3vh',
                                        height:'70vh', 
                                        background:'rgba(26,26,26, 0.5)', 
                                        color:'white', 
                                        marginTop:'8vh', 
                                        width:'150vh'
                                        }}>

                                        <Col sm="12">
                                                <Row>

                                                    <Col sm='1'></Col>
                                                    <Col sm="8">

                                                        <div className="mb-3">
                                                            <label htmlFor="exampleFormControlInput1"
                                                                   className="form-label titleStyleFeedback"> OrderId</label>
                                                            <input
                                                                className="form-control"
                                                                type='text'
                                                                name="orderId"
                                                                value={this.state.orderId}
                                                                onChange={this.onChange}
                                                                style={{width:'100vh'}}
                                                                required
                                                            />

                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="exampleFormControlTextarea1"
                                                                   className="form-label titleStyleFeedback">Enter your feedback</label>
                                                            <textarea className="form-control"
                                                                      type='text'
                                                                      name="feedbackBody"
                                                                      value={this.state.feedbackBody}
                                                                      onChange={this.onChange}
                                                                      required
                                                                      rows="8"
                                                                      style={{
                                                                          width:'100vh', 
                                                                          height:'20vh',
                                                                          maxHeight:'35vh'
                                                                          }}>

                                                                </textarea>
                                                        </div>
                                                    </Col>

                                                </Row>
                                                <Row className='-flex flex-row-reverse'>
                                                    <Col sm='1'></Col>
                                                    <Col sm="2">
                                                        <br/>
                                                        <button
                                                            className="btn btn-info"
                                                            onClick={this.onSubmit}
                                                            style={{ width: '140px', 
                                                            height: '40px', 
                                                            borderRadius:'2vh'
                                                        }}

                                                        >
                                                            Submit
                                                        </button>
                                                    </Col>
                                                     

                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>

                            </div>
                        </Row>
                    </Col>
                </Row>

            </div>
        )
    }

}

export default CreateFeedback

