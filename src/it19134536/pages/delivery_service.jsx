import React from "react";
import { Container, Row, Col } from 'reactstrap';

class DeliveryServicePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSearched: false,
            nicNumber: "",
            fullName: "",
            phoneNumber: "",
            address: ""
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.onSave = this.onSave.bind(this)
        this.onSearch = this.onSearch.bind(this)

    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSearch(e) {
        e.preventDefault()
        var searchResult = ["fws", "fdfs`"]

        //search for user details
        if (e.target.value.length != 0) {
            console.log('searching user')
        }

        //if search is sucessfull enable delete button
        if (searchResult.length != 0) {
            this.setState({
                isSearched: true
            })
        }
    }

    onSubmit(e) {
        e.preventDefault()
        if (this.state.nicNumber.length == 0) {
            alert('NIC NUmber cannot be empty')
        } else if (this.state.fullName.length = 0) {
            alert('Full name cannot be empty')
        } else if (this.state.phoneNumber.length = 0) {
            alert('Phone number cannot be empty')
        } else if (this.state.address.length = 0) {
            alert('address cannot be empty')
        } else {
            console.log('Processing Order...')
        }
    }
    onDelete(e) {
        e.preventDefault()
        if (this.state.isSearched) {
            console.log('deleting user')
        }
    }
    onSave(e) {
        e.preventDefault()
        if (!this.state.isSearched) {
            console.log('Saving user...')
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    {/* Left Hand side */}
                    <Col>
                        {/* Title */}
                        <Row>
                            <div ><h1>Delivery Service</h1></div>
                        </Row>
                        {/* Image */}
                        <Row>
                            <div ><h1>Image Comes here</h1></div>
                        </Row>
                    </Col>
                    {/* Right hand side */}
                    <Col >
                        <form onSubmit={this.onSubmit}>
                            <Row>
                                {/* search box */}
                                <Col xs="6" >
                                    <label>NIC Number</label>
                                    <br />
                                    <input type="text" id="nicNumber" name="nicNumber" value={this.state.nicNumber} onChange={this.onChange}></input>
                                </Col>
                                {/* search button */}
                                <Col xs="6" >
                                    <button onClick={this.onSearch}> Search</button>
                                </Col>
                            </Row>
                            <Row>
                                <label>Full Name</label>
                                <br />
                                <input type="text" id="fullName" name="fullName" value={this.state.fullName} onChange={this.onChange}></input>
                            </Row>
                            <Row>
                                <label>Phone Number</label>
                                <br />
                                <input type="text" id="phoneNumber" name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChange}></input>
                            </Row>
                            <Row>
                                <label>Address</label>
                                <br />
                                <input type="text" id="address" name="address" value={this.state.address} onChange={this.onChange}></input>
                            </Row>
                            <Row>
                                <Col>
                                    <button onClick={this.onSave} disabled={this.state.isSearched}>Save</button>
                                </Col>
                                <Col>
                                    <button onClick={this.onDelete} disabled={!this.state.isSearched}>Delete</button>
                                </Col>
                                <Col>
                                    <button type="submit">Order</button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default DeliveryServicePage
