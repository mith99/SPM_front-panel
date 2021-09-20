import React from "react";
import { Container, Row, Col, Table } from 'reactstrap';

class OrdersPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: ""
        }

        this.onSearch = this.onSearch.bind(this)
        this.onAcceptClick = this.onAcceptClick.bind(this)
    }

    componentDidMount() {

    }

    onSearch() {
        if (this.state.searchText.length != 0) {
            console.log('searching...')
        }
    }

    onAcceptClick() {
        console.log('accepting latest order...')
    }

    render() {
        return (
            <Container>

                {/* Header parts */}
                <Row>
                    {/* Title */}
                    <Col><h1>Orders</h1></Col>

                    {/* Search box */}
                    <Col>
                        <input type="text" onChange={this.onChange} placeholder="Search" id="searchText" name="searchText"></input>
                    </Col>
                    {/* search button */}
                    <Col>
                        <button onClick={this.onSearch}>Search</button>
                    </Col>
                </Row>

                {/* Accept button */}
                <Row>
                    <Col>
                        <button onClick={this.onAcceptClick}>Accept Latest oredr</button>
                    </Col>
                </Row>

                {/* Table of data */}
                <Row>
                    <Col>
                        <Table></Table>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default OrdersPage