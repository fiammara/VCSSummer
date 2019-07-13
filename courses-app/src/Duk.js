import React from 'react';
import "./App.css";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Collapsible from 'react-collapsible';
class Duk extends React.Component {

    render() {

        return (
            <div>

                <Row>

                    <Col xs={2} lg={3}></Col>
                    <Col xs={8} lg={6}><h6>Užduokite klausimą? </h6>
                        <input className="searchas" type="text" autofocus="autofocus" name="search" /></Col>
                    <Col xs={2} lg={3}></Col>

                </Row>
                <br />
                <Row>

                    <Col xs={2} lg={3}></Col>
                    <Col xs={8} lg={6}><h6>Dažniausiai užduodami klausimai </h6>
                    
                        <Collapsible trigger="Lorem ipsum dolor sit amet consetetur">
                            <p>Lorem ipsum content</p>
                        </Collapsible> 
                       <br/>
                        <Collapsible trigger="Lorem ipsum dolor sit amet consetetur">  
                           <p>Lorem ipsum content</p>
                           </Collapsible>
                        <br/>
                        <Collapsible trigger="Lorem ipsum dolor sit amet consetetur">
                            <p>Lorem ipsum content</p>
                        </Collapsible>
                        <br/>
                        <Collapsible trigger="Lorem ipsum dolor sit amet consetetur">
                            <p>Lorem ipsum content</p>
                        </Collapsible>
                        <br/>
                    </Col>
                    <Col xs={2} lg={3}>

                    </Col>

                </Row>

                <Row>
                    <Col xs={2} lg={3}></Col>
                    <Col xs={8} lg={6}><h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </h6></Col>
                    <Col xs={2} lg={3}></Col>
                </Row>

                <Row>
                    <Col xs={2} lg={3}></Col>
                    <Col xs={8} lg={6}>
                        <p> Ar buvo naudinga? </p>
                        <Button> Taip </Button>  <Button> Ne </Button></Col>
                    <Col xs={2} lg={3}></Col>
                </Row>
                <br />
            </div>)
    }
}

export default Duk;