import React, { Component } from "react";
import TabPasien from "../pasien/TabPasien";
import { Col, Card, Form, InputGroup, Button, Modal } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateRegister extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };
    }

    showModalHandler = () => {
        this.setState({ showModal: true });
    };

    hideModalHandler = () => {
        this.setState({ showModal: false });
    };

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>Registrasi Pasien</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className="row">
                                <Form.Label sm={3} column>
                                    Tanggal
                                </Form.Label>
                                <Col sm={9}>
                                    <ReactDatePicker
                                        peekNextMonth
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group className="row">
                                <Form.Label sm={3} column>
                                    No RM
                                </Form.Label>
                                <Col sm={9}>
                                    <InputGroup>
                                        <Form.Control
                                            type="text"
                                            name="noRekamMedik"
                                            id="noRekamMedik"
                                            placeholder="No Rekam Medik"
                                        ></Form.Control>
                                        <InputGroup.Append>
                                            <Button
                                                variant="outline-secondary"
                                                type="button"
                                            >
                                                <i className="fa fa-search" />
                                            </Button>
                                            <Button
                                                variant="outline-secondary"
                                                type="button"
                                                onClick={this.showModalHandler}
                                            >
                                                <i className="fa fa-plus" />
                                            </Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>

                <Modal
                    show={this.state.showModal}
                    onHide={this.hideModalHandler}
                    size="xl"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Tambah Pasien</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <TabPasien />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={this.hideModalHandler}
                        >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default CreateRegister;
