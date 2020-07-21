import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";

class CreatePasien extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="pasien" id="tabPasien">
                <Tab eventKey="pasien" title="Data Diri Pasien">
                    <div>Form Data diri pasien</div>
                </Tab>
                <Tab eventKey="pasanganPasien" title="Data Pasangan Pasien">
                    <div>Form Data pasangan pasien</div>
                </Tab>
                <Tab eventKey="ayahPasien" title="Data Ayah Pasien">
                    <div>Form Data ayah pasien</div>
                </Tab>
                <Tab eventKey="ibuPasien" title="Data Ibu Pasien">
                    <div>Form Data Ibu pasien</div>
                </Tab>
            </Tabs>
        );
    }
}

export default CreatePasien;
