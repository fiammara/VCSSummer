import React from 'react';
import "./App.css";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom';

class Footer extends React.Component {

    render() {
        return (

            <div className="footer" >
         
                    <Navbar >
                        <Row>

                            <Col xs={6} md={4} lg={3}>
                                <NavLink to='/duk'>
                                    <Button className="button_footer" variant="outline-light" style={{ fontSize: '10px'}}>DUK </Button></NavLink></Col>
                            <Col xs={6} md={4} lg={3}>
                            <NavLink to='/blog'>   <Button className="button_footer" variant="outline-light" style={{ fontSize: '10px' }}>BLOGAS</Button></NavLink></Col>
                            <Col xs={6} md={4} lg={3}>
                                <Button className="button_footer" variant="outline-light" style={{ fontSize: '10px' }}>SLAPUKŲ NUSTATYMAS</Button></Col>
                            <Col xs={6} md={4} lg={3}>
                                <Button className="button_footer" variant="outline-light" style={{ fontSize: '10px' }}>FACEBOOK</Button></Col>
                            <Col xs={6} md={4} lg={3}>
                                <Button className="button_footer" variant="outline-light" style={{ fontSize: '10px' }}>PRIVATUMO POLITIKA</Button></Col>
                            <Col xs={6} md={4} lg={3}>
                                <Button className="button_footer" variant="outline-light" style={{ fontSize: '10px' }}>SUSISIEKTI</Button></Col>
                            <Col xs={6} md={4} lg={3}>
                                <Button className="button_footer" variant="outline-light" style={{ fontSize: '10px' }}>ĮMONĖMS</Button></Col>
                        </Row>
                    </Navbar>
                    <div className="authors"> &copy;Vasaros projektai. All rights reserved. </div>
               
            </div>
        );
    }

}

export default Footer;