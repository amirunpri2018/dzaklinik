import React, { Component } from "react";
import {
    Form,
    Row,
    Col,
    Container,
    Button,
    Card,
    Alert
} from "react-bootstrap";
import Axios from "axios";
import ReactDatePicker from "react-datepicker";
import Select, { components } from "react-select";
import "react-datepicker/dist/react-datepicker.css";

const TanggalLahirInput = ({ value, onClick, onChange, errors }) => (
    <Form.Group>
        <Form.Control
            type="text"
            placeholder="Tanggal Lahir"
            name="tanggal_lahir"
            value={value}
            onClick={onClick}
            onChange={onChange}
            isInvalid={!!errors}
        />
        <Form.Control.Feedback type="invalid">{errors}</Form.Control.Feedback>
    </Form.Group>
);

const ControlComponent = props => {
    return (
        <Form.Group>
            <Form.Control
                type="hidden"
                isInvalid={!!props.selectProps.errors}
            />
            <components.Control {...props} />
            <Form.Control.Feedback type="invalid">
                {props.selectProps.errors}
            </Form.Control.Feedback>
        </Form.Group>
    );
};

class CreatePasien extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataStatus: [],
            dataAgama: [],
            dataPendidikan: [],
            dataSuku: [],
            dataBahasa: [],
            dataProvinsi: [],
            dataKota: [],
            dataKecamatan: [],
            dataKelurahan: [],
            nomor_rekam_medik: "",
            nik: "",
            nama_pasien: "",
            tempat_lahir: "",
            tanggal_lahir: new Date(),
            jenis_kelamin: "",
            warga_negara: "",
            status_nikah_id: "",
            suku_id: "",
            agama_id: "",
            provinsi_id: "",
            kota_id: "",
            kecamatan_id: "",
            kelurahan_id: "",
            pendidikan_id: "",
            alamat: "",
            rtrw: "",
            kodepos: "",
            email: "",
            errors: {}
        };
    }

    componentDidMount() {
        Axios.get("/statusnikah").then(response => {
            this.setState({
                dataStatus: response.data.data
            });
        });

        Axios.get("/agama").then(response => {
            this.setState({
                dataAgama: response.data.data
            });
        });

        Axios.get("/pendidikan").then(response => {
            this.setState({
                dataPendidikan: response.data.data
            });
        });

        Axios.get("/suku").then(response => {
            this.setState({
                dataSuku: response.data.data
            });
        });

        Axios.get("/provinsi").then(response => {
            this.setState({
                dataProvinsi: response.data.data
            });
        });

        Axios.get("/bahasa").then(response => {
            this.setState({
                dataBahasa: response.data.data
            });
        });
    }

    formSubmitHandler = e => {
        e.preventDefault();
        const pasien = {
            nik: this.state.nik,
            nama_pasien: this.state.nama_pasien,
            jenis_kelamin: this.state.jenis_kelamin,
            tempat_lahir: this.state.tempat_lahir,
            tanggal_lahir: this.state.tanggal_lahir,
            status_nikah_id: this.state.status_nikah_id?.value,
            agama_id: this.state.agama_id?.value,
            warga_negara: this.state.warga_negara,
            pendidikan_id: this.state.pendidikan_id?.value,
            suku_id: this.state.suku_id?.value,
            bahasa_id: this.state.bahasa_id?.value,
            provinsi_id: this.state.provinsi_id?.value,
            kota_id: this.state.kota_id?.value,
            kecamatan_id: this.state.kecamatan_id?.value,
            kelurahan_id: this.state.kelurahan_id?.value,
            jalan: this.state.jalan,
            rtrw: this.state.rtrw,
            kodepos: this.state.kodepos,
            email: this.state.email
        };

        Axios.post("/pasien", pasien)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                this.setState({ errors: err.response.data.errors });
            });
    };

    tanggalLahirChangeHander = date => {
        this.setState({ tanggal_lahir: date });
    };

    provinsiChangedHandler = item => {
        this.setState({ provinsi_id: item });
        Axios.get(`provinsi/${item.value}/kota`).then(response => {
            this.setState({ dataKota: response.data.data.kota });
        });
    };

    kotaChangedHandler = item => {
        this.setState({ kota_id: item });
        Axios.get(`kota/${item.value}/kecamatan`).then(response => {
            this.setState({ dataKecamatan: response.data.data.kecamatan });
        });
    };

    kecamatanChangedHandler = item => {
        this.setState({ kecamatan_id: item });
        Axios.get(`kecamatan/${item.value}/kelurahan`).then(response => {
            this.setState({ dataKelurahan: response.data.data.kelurahan });
        });
    };

    kelurahanChangedHandler = item => {
        this.setState({ kelurahan_id: item });
    };

    inputChangedHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    agamaChangedHandler = item => {
        this.setState({ agama_id: item });
    };

    statusNikahChangedHandler = item => {
        this.setState({ status_nikah_id: item });
    };

    pendidikanChangedHandler = item => {
        this.setState({ pendidikan_id: item });
    };

    sukuChangedHandler = item => {
        this.setState({ suku_id: item });
    };

    bahasaChangedHandler = item => {
        this.setState({ bahasa_id: item });
    };

    render() {
        const statusNikahOption = this.state.dataStatus.map(item => ({
            value: item.id,
            label: item.status
        }));

        const agamaOption = this.state.dataAgama.map(item => ({
            value: item.id,
            label: item.agama
        }));

        const bahasaOption = this.state.dataBahasa.map(item => ({
            value: item.id,
            label: item.bahasa
        }));

        const pendidikanOption = this.state.dataPendidikan.map(item => ({
            value: item.id,
            label: item.pendidikan
        }));

        const sukuOption = this.state.dataSuku.map(item => ({
            value: item.id,
            label: item.suku
        }));

        const provinsiOption = this.state.dataProvinsi.map(item => ({
            value: item.id,
            label: item.provinsi
        }));

        const kotaOption = this.state.dataKota.map(item => ({
            value: item.id,
            label: item.kota
        }));

        const kecamatanOption = this.state.dataKecamatan.map(item => ({
            value: item.id,
            label: item.kecamatan
        }));

        const kelurahanOption = this.state.dataKelurahan.map(item => ({
            value: item.id,
            label: item.kelurahan
        }));

        const { errors } = this.state;
        let alert = null;
        if (Object.keys(errors).length != 0) {
            alert = (
                <Alert variant="danger" dismissible>
                    <ul>
                        {Object.keys(errors).map((obj, i) => (
                            <li key={i}>{errors[obj].join(",")}</li>
                        ))}
                    </ul>
                </Alert>
            );
        }

        return (
            <Container className="m-2">
                <Form onSubmit={this.formSubmitHandler}>
                    <Card>
                        <Card.Body>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                    No Rekam Medik
                                </Form.Label>
                                <Col sm={4}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Akan di isi Oleh Sistem"
                                        id="no_rekam_medik"
                                        value={this.state.nomor_rekam_medik}
                                        disabled
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
                                        name="nik"
                                        onChange={this.inputChangedHandler}
                                        value={this.state.nik}
                                        isInvalid={!!errors["nik"]}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors["nik"]}
                                    </Form.Control.Feedback>
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
                                        name="nama_pasien"
                                        onChange={this.inputChangedHandler}
                                        value={this.state.nama_pasien}
                                        isInvalid={!!errors["nama_pasien"]}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors["nama_pasien"]}
                                    </Form.Control.Feedback>
                                </Col>
                                <Form.Label column sm={2}>
                                    Jenis Kelamin
                                </Form.Label>
                                <Col sm={4}>
                                    <Form.Check
                                        inline
                                        label="Laki-laki"
                                        type="radio"
                                        name="jenis_kelamin"
                                        id="l"
                                        value="l"
                                        onChange={this.inputChangedHandler}
                                        checked={
                                            this.state.jenis_kelamin == "l"
                                                ? true
                                                : false
                                        }
                                        isInvalid={!!errors["jenis_kelamin"]}
                                        feedback={errors["jenis_kelamin"]}
                                    />
                                    <Form.Check
                                        inline
                                        label="Perempuan"
                                        type="radio"
                                        name="jenis_kelamin"
                                        id="p"
                                        value="p"
                                        onChange={this.inputChangedHandler}
                                        checked={
                                            this.state.jenis_kelamin == "p"
                                                ? true
                                                : false
                                        }
                                        isInvalid={!!errors["jenis_kelamin"]}
                                        feedback={errors["jenis_kelamin"]}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                    Tempat Lahir
                                </Form.Label>
                                <Col sm={4}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Tempat Lahir Pasien"
                                        id="tempat_lahir"
                                        name="tempat_lahir"
                                        onChange={this.inputChangedHandler}
                                        value={this.state.tempat_lahir}
                                        isInvalid={!!errors["tempat_lahir"]}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors["tempat_lahir"]}
                                    </Form.Control.Feedback>
                                </Col>
                                <Form.Label column sm={2}>
                                    Tanggal Lahir
                                </Form.Label>
                                <Col sm={4}>
                                    <ReactDatePicker
                                        selected={this.state.tanggal_lahir}
                                        onChange={date =>
                                            this.tanggalLahirChangeHander(date)
                                        }
                                        showMonthDropdown
                                        showYearDropdown
                                        dateFormat="dd-MM-yyyy"
                                        dropdownMode="select"
                                        customInput={
                                            <TanggalLahirInput
                                                errors={errors["tanggal_lahir"]}
                                            />
                                        }
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                    Status
                                </Form.Label>
                                <Col sm={4}>
                                    <Select
                                        options={statusNikahOption}
                                        name="status_nikah_id"
                                        value={this.state.status_nikah_id}
                                        errors={errors["status_nikah_id"]}
                                        onChange={
                                            this.statusNikahChangedHandler
                                        }
                                        components={{
                                            Control: ControlComponent
                                        }}
                                    />
                                </Col>
                                <Form.Label column sm={2}>
                                    Agama
                                </Form.Label>
                                <Col sm={4}>
                                    <Select
                                        options={agamaOption}
                                        name="agama_id"
                                        value={this.state.agama_id}
                                        onChange={this.agamaChangedHandler}
                                        errors={errors["agama"]}
                                        components={{
                                            Control: ControlComponent
                                        }}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                    Kewarganegaraan
                                </Form.Label>
                                <Col sm={4}>
                                    <Form.Control
                                        as="select"
                                        id="warga_negara"
                                        name="warga_negara"
                                        value={this.state.warga_negara}
                                        onChange={this.inputChangedHandler}
                                    >
                                        <option value="wni">WNI</option>
                                        <option value="wna">WNA</option>
                                    </Form.Control>
                                </Col>
                                <Form.Label column sm={2}>
                                    Pendidikan
                                </Form.Label>
                                <Col sm={4}>
                                    <Select
                                        options={pendidikanOption}
                                        name="pendidikan_id"
                                        value={this.state.pendidikan_id}
                                        errors={errors["pendidikan_id"]}
                                        onChange={this.pendidikanChangedHandler}
                                        components={{
                                            Control: ControlComponent
                                        }}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                    Suku
                                </Form.Label>
                                <Col sm={4}>
                                    <Select
                                        options={sukuOption}
                                        name="suku_id"
                                        value={this.state.suku_id}
                                        errors={errors["suku_id"]}
                                        onChange={this.sukuChangedHandler}
                                        components={{
                                            Control: ControlComponent
                                        }}
                                    />
                                </Col>
                                <Form.Label column sm={2}>
                                    Bahasa
                                </Form.Label>
                                <Col sm={4}>
                                    <Select
                                        options={bahasaOption}
                                        name="bahasa_id"
                                        value={this.state.bahasa_id}
                                        errors={errors["bahasa_id"]}
                                        onChange={this.bahasaChangedHandler}
                                        components={{
                                            Control: ControlComponent
                                        }}
                                    />
                                </Col>
                            </Form.Group>

                            <fieldset className="border rounded p-3">
                                <legend className="border rounded">
                                    Alamat
                                </legend>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>
                                        Provinsi
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Select
                                            options={provinsiOption}
                                            name="provinsi_id"
                                            value={this.state.provinsi_id}
                                            errors={errors["provinsi_id"]}
                                            onChange={
                                                this.provinsiChangedHandler
                                            }
                                            components={{
                                                Control: ControlComponent
                                            }}
                                        />
                                    </Col>
                                    <Form.Label column sm={2}>
                                        Kota
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Select
                                            options={kotaOption}
                                            name="kota_id"
                                            value={this.state.kota_id}
                                            errors={errors["kota_id"]}
                                            onChange={this.kotaChangedHandler}
                                            components={{
                                                Control: ControlComponent
                                            }}
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>
                                        Kecamatan
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Select
                                            options={kecamatanOption}
                                            name="kecamatan_id"
                                            value={this.state.kecamatan_id}
                                            errors={errors["kecamatan_id"]}
                                            onChange={
                                                this.kecamatanChangedHandler
                                            }
                                            components={{
                                                Control: ControlComponent
                                            }}
                                        />
                                    </Col>
                                    <Form.Label column sm={2}>
                                        Kelurahan
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Select
                                            options={kelurahanOption}
                                            name="kelurahan_id"
                                            value={this.state.kelurahan_id}
                                            errors={errors["kelurahan_id"]}
                                            onChange={
                                                this.kelurahanChangedHandler
                                            }
                                            components={{
                                                Control: ControlComponent
                                            }}
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>
                                        Jalan
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Form.Control
                                            id="alamat"
                                            name="alamat"
                                            onChange={this.inputChangedHandler}
                                            value={this.state.alamat}
                                        />
                                    </Col>
                                    <Form.Label column sm={2}>
                                        RT/RW
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Form.Control
                                            id="rtrw"
                                            name="rtrw"
                                            onChange={this.inputChangedHandler}
                                            value={this.state.rtrw}
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>
                                        Kode Pos
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Form.Control
                                            id="kodepos"
                                            name="kodepos"
                                            onChange={this.inputChangedHandler}
                                            value={this.state.kodepos}
                                        />
                                    </Col>
                                    <Form.Label column sm={2}>
                                        Email
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Form.Control
                                            id="email"
                                            name="email"
                                            onChange={this.inputChangedHandler}
                                            value={this.state.email}
                                        />
                                    </Col>
                                </Form.Group>
                            </fieldset>
                        </Card.Body>
                        <Card.Footer>
                            {alert}
                            <Button
                                variant="primary"
                                className="float-right"
                                type="submit"
                            >
                                Simpan
                            </Button>
                        </Card.Footer>
                    </Card>
                </Form>
            </Container>
        );
    }
}

export default CreatePasien;
