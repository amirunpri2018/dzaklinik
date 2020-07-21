import React, { Component } from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CreateRegister from "./CreateRegister";
import ListRegister from "./ListRegister";
class Registrasi extends Component {
    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center">
                    <Col sm={4}>
                        <CreateRegister />
                    </Col>
                    <Col sm={8}>
                        <ListRegister />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Registrasi;

if (document.getElementById("registrasi")) {
    ReactDOM.render(<Registrasi />, document.getElementById("registrasi"));
}
