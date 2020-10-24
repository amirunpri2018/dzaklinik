import React, { Component } from "react";
import TabPasien from "../pasien/TabPasien";
import {
    Col,
    Card,
    Form,
    InputGroup,
    Button,
    Modal,
    Row
} from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TanggalRegisterInput = ({ value, onClick, onChange, errors }) => (
    <Form.Group>
        <Form.Control
            type="text"
            placeholder="Tanggal Pendaftaran"
            name="tanggal"
            value={value}
            onClick={onClick}
            onChange={onChange}
            isInvalid={!!errors}
        />
        <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
    </Form.Group>
);

class CreateRegister extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            search: "",
            tanggal: new Date(),
            nomor_rekam_medik: "",
            nomor_bpjs: "",
            nama_pasien: "",
            jenis_pasien_id: "",
            unit_id: "",
            dokter_id: "",
            errors: {}
        };
    }

    showModalHandler = () => {
        this.setState({ showModal: true });
    };

    hideModalHandler = () => {
        this.setState({ showModal: false });
    };

    inputChangedHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    tanggalChangeHander = date => {
        this.setState({ tanggal: date });
    };

    render() {
        const { errors } = this.state;
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
                                        selected={this.state.tanggal}
                                        onChange={date =>
                                            this.tanggalChangeHander(date)
                                        }
                                        customInput={
                                            <TanggalRegisterInput
                                                errors={errors["tanggal"]}
                                            />
                                        }
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
                                            name="search"
                                            id="search"
                                            placeholder="No RM/NIK/BPJS"
                                            value={this.state.search}
                                            onChange={this.inputChangedHandler}
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
                                            name="nomor_bpjs"
                                            id="nomor_bpjs"
                                            placeholder="No BPJS"
                                            value={this.state.nomor_bpjs}
                                            onChange={this.inputChangedHandler}
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
                                            defaultValue="-"
                                            value={this.state.nama_pasien}
                                        />
                                    </InputGroup>
                                </Col>
                            </Form.Group>
                            <Form.Group className="row">
                                <Form.Label sm={4} column>
                                    Jenis Bayar
                                </Form.Label>
                                <Col sm={8}>
                                    <InputGroup>
                                        <Form.Control
                                            as="select"
                                            name="jenisPasien"
                                            id="jenisPasien"
                                        ></Form.Control>
                                    </InputGroup>
                                </Col>
                            </Form.Group>
                            <Form.Group className="row">
                                <Form.Label sm={4} column>
                                    Poli Tujuan
                                </Form.Label>
                                <Col sm={8}>
                                    <InputGroup>
                                        <Form.Control
                                            as="select"
                                            name="poliTujuan"
                                            id="poliTujuan"
                                        ></Form.Control>
                                    </InputGroup>
                                </Col>
                            </Form.Group>
                            <Form.Group className="row">
                                <Form.Label sm={4} column>
                                    Dokter
                                </Form.Label>
                                <Col sm={8}>
                                    <InputGroup>
                                        <Form.Control
                                            as="select"
                                            name="dokter"
                                            id="dokter"
                                        ></Form.Control>
                                    </InputGroup>
                                </Col>
                            </Form.Group>
                            <Row sm={12} className="float-right">
                                <Col>
                                    <Button
                                        variant="danger"
                                        type="reset"
                                        className="pr-2 mr-2"
                                    >
                                        Batal
                                    </Button>
                                    <Button variant="primary" type="submit">
                                        Simpan
                                    </Button>
                                </Col>
                            </Row>
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
