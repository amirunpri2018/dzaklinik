import React, { Component } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";

class CreatePasien extends Component {
    render() {
        return (
            <Container className="m-2">
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            No Rekam Medik
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control
                                type="email"
                                placeholder="email"
                                id="no_rekam_medik"
                            />
                        </Col>
                        <Form.Label column sm={2}>
                            Nama Pasien
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control
                                type="text"
                                placeholder="Nama Pasien"
                                id="nama_pasien"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}></Form.Group>
                </Form>
            </Container>
        );
    }
}

export default CreatePasien;
