import React, {Component} from "react";
// import { Col, Row } from "reactstrap";


class navBar extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light transparent" style={{ background: 'black', color: '#FFFFFF', opacity:'90%', height:'119px' }}>
            <div className=" container-fluid">
                <div className="collapse navbar-collapse d-flex justify-content-around">
                <ul className="navbar-nav navTitles">
                        <li className="nav-item">
                            <a className="nav-link navbar-brand active" style={{ color: 'white' }} href="/home-page" >
                                Image
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav navTitles">
                        <li className="nav-item">
                            <a className="nav-link navbar-brand active" style={{ color: 'white' }} href="/home-page" >
                                Home
                            </a>
                        </li>
                    </ul>
                
                    <ul className="navbar-nav navTitles">
                        <li className="nav-item">
                            <a className="nav-link navbar-brand active" style={{ color: 'white' }} href="/keyspeakers" >
                                Categories
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav navTitles">
                        <li className="nav-item">
                            <a className="nav-link navbar-brand active" style={{ color: 'white' }} href="/researchers" >
                                Menus
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav navTitles">
                        <li className="nav-item">
                            <a className="nav-link navbar-brand active" style={{ color: 'white' }} href="/todays-specials" >
                                Today's Special
                            </a>
                        </li>
                    </ul>
                
                    <ul className="navbar-nav navTitles">
                        <li className="nav-item">
                            <a className="nav-link navbar-brand active" style={{ color: 'white' }} href="/presenters" >
                                Offers
                            </a>
                        </li>
                    </ul>

                    <ul className="navbar-nav navTitles">
                        <li className="nav-item">
                            <a className="nav-link navbar-brand active" style={{ color: 'white' }} href="/agenda" >
                                Orders
                            </a>
                        </li>
                    </ul>

                    <ul className="navbar-nav navTitles">
                        <li className="nav-item">
                            <a className="nav-link navbar-brand active" style={{ color: 'white' }} href="/subscriber" >
                            Email Subscriber
                            </a>
                        </li>
                    </ul>



                   

                   


                </div>
            </div>
            <hr />
        </nav>
        )

    }
}

export default navBar

