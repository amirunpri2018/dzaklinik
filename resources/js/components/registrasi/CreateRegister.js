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
                                <Form.Label sm={4} column>
                                    Tanggal
                                </Form.Label>
                                <Col sm={8}>
                                    <ReactDatePicker
                                        peekNextMonth
                                        showMonthDropdown
                                        showYearDropdown
                                        dropdownMode="select"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group className="row">
                                <Form.Label sm={4} column>
                                    No Rm/Nik/Bpjs
                                </Form.Label>
                                <Col sm={8}>
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
                            <Form.Group className="row">
                                <Form.Label sm={4} column>
                                    No BPJS
                                </Form.Label>
                                <Col sm={8}>
                                    <InputGroup>
                                        <Form.Control
                                            type="text"
                                            name="noBpjs"
                                            id="noBpjs"
                                            placeholder="No BPJS"
                                        ></Form.Control>
                                    </InputGroup>
                                </Col>
                            </Form.Group>
                            <Form.Group className="row">
                                <Form.Label sm={4} column>
                                    Nama Pasien
                                </Form.Label>
                                <Col sm={8}>
                                    <InputGroup>
                                        <Form.Control
                                            plaintext
                                            readOnly
                                            defaultValue="email@example.com"
                                        />
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
                    <Modal.Header closeBsutton>
                        <Modal.Title>Tambah Pasien</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <TabPasien hideModalHandler={this.hideModalHandler} />
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
