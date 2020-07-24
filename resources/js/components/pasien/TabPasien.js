import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import CreatePasien from "./CreatePasien";

class TabPasien extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="pasien" id="tabPasien">
                <Tab eventKey="pasien" title="Data Diri Pasien">
                    <CreatePasien />
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

export default TabPasien;
