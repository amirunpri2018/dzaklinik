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
                                type="text"
                                placeholder="No Rekam Medik"
                                id="no_rekam_medik"
                            />
                        </Col>
                        <Form.Label column sm={2}>
                            NIK
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control
                                type="text"
                                placeholder="NIK"
                                id="nik"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
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
                        <Form.Label column sm={2}>
                            Jenis Kelamin
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Check
                                inline
                                label="Laki-laki"
                                type="radio"
                                id="l"
                            />
                            <Form.Check
                                inline
                                label="Perempuan"
                                type="radio"
                                id="p"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Status
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control as="select" id="status_id">
                                <option>Pilih Status</option>
                            </Form.Control>
                        </Col>
                        <Form.Label column sm={2}>
                            Agama
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control as="select" id="agama_id">
                                <option>Pilih Agama</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Kewarganegaraan
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control as="select" id="warga_negara">
                                <option value="wni">WNI</option>
                                <option value="wna">WNA</option>
                            </Form.Control>
                        </Col>
                        <Form.Label column sm={2}>
                            Pendidikan
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control as="select" id="pendidikan_id">
                                <option>Pilih Pendidikan</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>
                            Suku
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control as="select" id="suku_id">
                                <option value="">Pilih Suku</option>
                            </Form.Control>
                        </Col>
                        <Form.Label column sm={2}>
                            Bahasa
                        </Form.Label>
                        <Col sm={4}>
                            <Form.Control as="select" id="bahasa_id">
                                <option>Pilih Bahasa</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <fieldset className="border rounded p-3">
                        <legend className="border rounded">Alamat</legend>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                Provinsi
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Control as="select" id="provinsi_id">
                                    <option>Pilih Provinsi</option>
                                </Form.Control>
                            </Col>
                            <Form.Label column sm={2}>
                                Kota
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Control as="select" id="kota_id">
                                    <option>Pilih Kota</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                Kecamatan
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Control as="select" id="kecamatan_id">
                                    <option>Pilih Kecamatan</option>
                                </Form.Control>
                            </Col>
                            <Form.Label column sm={2}>
                                Kelurahan
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Control as="select" id="kelurahan_id">
                                    <option>Pilih Kelurahan</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                Jalan
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Control id="alamat" />
                            </Col>
                            <Form.Label column sm={2}>
                                RT/RW
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Control id="kelurahan_id" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                Kode Pos
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Control id="kodepos" />
                            </Col>
                            <Form.Label column sm={2}>
                                Email
                            </Form.Label>
                            <Col sm={4}>
                                <Form.Control id="email" />
                            </Col>
                        </Form.Group>
                    </fieldset>
                </Form>
            </Container>
        );
    }
}

export default CreatePasien;
