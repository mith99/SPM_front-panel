import React, {Component} from "react";
import { Col, Row } from "reactstrap";
import ''

class viewSpecials extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div style={{background:'#E5E5E5', maxHeight:'100vh'}}>
                <Row>
                    <Col sm='1'></Col>
                    <Col sm='2'>
                        <h1>Today's Specials</h1>
                    </Col>
                </Row>
            </div>
        )

    }
}

export default viewSpecials

