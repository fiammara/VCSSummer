import React from 'react';
import "./App.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'

class Footer extends React.Component {

    render() {
        return (

            <div className="footer">
                <Container fixed="top">
                    <Navbar >
                        <Row>
                            <Col><Button className="button_footer " variant="outline-primary" >DUK</Button></Col>
                            <Col xs={6} lg={3}><Button className="button_footer" variant="outline-primary">Cookies Policy</Button></Col>
                            <Col xs={6} lg={3}><Button className="button_footer" variant="outline-primary">Legal terms</Button></Col>
                            <Col xs={6} lg={3}><Button className="button_footer" variant="outline-primary">Privacy Policy</Button></Col>
                            <Col xs={6} lg={3}><Button className="button_footer" variant="outline-primary">Blog</Button></Col>
                            <Col xs={6} lg={3}><Button className="button_footer" variant="outline-primary">Facebook</Button></Col>
                            <Col xs={6} lg={3}><Button className="button_footer" variant="outline-primary">Contact via email</Button></Col>
                        </Row>
                    </Navbar>
                    <div className="authors"> &copy;Vasaros projektai. All rights reserved. </div>
                </Container>
            </div>
        );
    }

}

export default Footer;