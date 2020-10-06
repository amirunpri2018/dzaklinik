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
import Select from "react-select";
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
            nama: this.state.nama,
            jenis_kelamin: this.state.jenis_kelamin,
            tempat_lahir: this.state.tempat_lahir,
            tanggal_lahir: this.state.tanggal_lahir,
            agama_id: this.state.agama_id
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

    provinsiChangedHandler = e => {
        Axios.get(`provinsi/${e.target.value}/kota`).then(response => {
            this.setState({ dataKota: response.data.data.kota });
        });
    };

    kotaChangedHandler = e => {
        Axios.get(`kota/${e.target.value}/kecamatan`).then(response => {
            this.setState({ dataKecamatan: response.data.data.kecamatan });
        });
    };

    kecamatanChangedHandler = e => {
        Axios.get(`kecamatan/${e.target.value}/kelurahan`).then(response => {
            this.setState({ dataKelurahan: response.data.data.kelurahan });
        });
    };

    inputChangedHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    agamaChangedHandler = item => {
        console.log(item);
        this.setState({ agama_id: item.value });
    };

    render() {
        const statusNikahOption = this.state.dataStatus.map(item => (
            <option value={item.id} key={item.id}>
                {item.status}
            </option>
        ));

        // const agamaOption = this.state.dataAgama.map(item => (
        //     <option value={item.id} key={item.id}>
        //         {item.agama}
        //     </option>
        // ));

        const agamaOption = this.state.dataAgama.map(item => ({
            value: item.id,
            label: item.agama
        }));

        const bahasaOption = this.state.dataBahasa.map(item => (
            <option value={item.id} key={item.id}>
                {item.bahasa}
            </option>
        ));

        const pendidikanOption = this.state.dataPendidikan.map(item => (
            <option value={item.id} key={item.id}>
                {item.pendidikan}
            </option>
        ));

        const sukuOption = this.state.dataSuku.map(item => (
            <option value={item.id} key={item.id}>
                {item.suku}
            </option>
        ));

        const provinsiOption = this.state.dataProvinsi.map(item => (
            <option value={item.id} key={item.id}>
                {item.provinsi}
            </option>
        ));

        const kotaOption = this.state.dataKota.map(item => (
            <option value={item.id} key={item.id}>
                {item.kota}
            </option>
        ));

        const kecamatanOption = this.state.dataKecamatan.map(item => (
            <option value={item.id} key={item.id}>
                {item.kecamatan}
            </option>
        ));

        const kelurahanOption = this.state.dataKelurahan.map(item => (
            <option value={item.id} key={item.id}>
                {item.kelurahan}
            </option>
        ));

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
                                    <Form.Control
                                        as="select"
                                        id="status_id"
                                        name="status_nikah_id"
                                        onChange={this.inputChangedHandler}
                                        value={this.state.status_nikah_id}
                                    >
                                        <option>Pilih Status</option>
                                        {statusNikahOption}
                                    </Form.Control>
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
                                    />
                                    {/* <Form.Control
                                        as="select"
                                        name="agama_id"
                                        id="agama_id"
                                        value={this.state.agama_id}
                                        onChange={this.inputChangedHandler}
                                    >
                                        <option>Pilih Agama</option>
                                        {agamaOption}
                                    </Form.Control> */}
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
                                    <Form.Control
                                        as="select"
                                        id="pendidikan_id"
                                        name="pendidikan_id"
                                        value={this.state.pendidikan_id}
                                        onChange={this.inputChangedHandler}
                                    >
                                        <option>Pilih Pendidikan</option>
                                        {pendidikanOption}
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                    Suku
                                </Form.Label>
                                <Col sm={4}>
                                    <Form.Control
                                        as="select"
                                        id="suku_id"
                                        name="suku_id"
                                        value={this.state.suku_id}
                                        onChange={this.inputChangedHandler}
                                    >
                                        <option value="">Pilih Suku</option>
                                        {sukuOption}
                                    </Form.Control>
                                </Col>
                                <Form.Label column sm={2}>
                                    Bahasa
                                </Form.Label>
                                <Col sm={4}>
                                    <Form.Control
                                        as="select"
                                        id="bahasa_id"
                                        name="bahasa_id"
                                        value={this.state.bahasa_id}
                                        onChange={this.inputChangedHandler}
                                    >
                                        <option>Pilih Bahasa</option>
                                        {bahasaOption}
                                    </Form.Control>
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
                                        <Form.Control
                                            as="select"
                                            id="provinsi_id"
                                            name="provinsi_id"
                                            value={this.state.provinsi_id}
                                            onChange={e => {
                                                this.provinsiChangedHandler(e);
                                                this.inputChangedHandler(e);
                                            }}
                                        >
                                            <option>Pilih Provinsi</option>
                                            {provinsiOption}
                                        </Form.Control>
                                    </Col>
                                    <Form.Label column sm={2}>
                                        Kota
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Form.Control
                                            as="select"
                                            id="kota_id"
                                            name="kota_id"
                                            value={this.state.kota_id}
                                            onChange={e => {
                                                this.kotaChangedHandler(e);
                                                this.inputChangedHandler(e);
                                            }}
                                        >
                                            <option>Pilih Kota</option>
                                            {kotaOption}
                                        </Form.Control>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>
                                        Kecamatan
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Form.Control
                                            as="select"
                                            id="kecamatan_id"
                                            name="kecamatan_id"
                                            value={this.state.kecamatan_id}
                                            onChange={e => {
                                                this.kecamatanChangedHandler(e);
                                                this.inputChangedHandler(e);
                                            }}
                                        >
                                            <option>Pilih Kecamatan</option>
                                            {kecamatanOption}
                                        </Form.Control>
                                    </Col>
                                    <Form.Label column sm={2}>
                                        Kelurahan
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Form.Control
                                            as="select"
                                            id="kelurahan_id"
                                            name="kelurahan_id"
                                            value={this.state.kelurahan_id}
                                            onChange={this.inputChangedHandler}
                                        >
                                            <option>Pilih Kelurahan</option>
                                            {kelurahanOption}
                                        </Form.Control>
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
