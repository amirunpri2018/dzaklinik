import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class ListRegister extends Component {
    render() {
        return (
            <Card>
                <Card.Header>Daftar Pasien</Card.Header>
                <Card.Body>
                    {/* tabel pasien yang mendaftar */}
                    Daftar Pendaftaran Pasien
                </Card.Body>
            </Card>
        );
    }
}
export default ListRegister;
