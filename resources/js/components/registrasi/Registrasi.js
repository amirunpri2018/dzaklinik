import React, { Component } from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CreatePasien from "../pasien/CreatePasien";
class Registrasi extends Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-header">Registrasi Pasien</div>
                            <div class="card-body">
                                <form>
                                    <div className="form-group row">
                                        <label
                                            htmlFor="tanggal"
                                            className="col-sm-3 col-form-label"
                                        >
                                            Tanggal
                                        </label>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="tanggal"
                                                id="tanggal"
                                                placeholder="Tanggal daftar"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label
                                            htmlFor="no_rekam_medik"
                                            className="col-sm-3 col-form-label"
                                        >
                                            No RM
                                        </label>
                                        <div className="input-group col-sm-9">
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                            <div className="input-group-append">
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    type="button"
                                                >
                                                    <i class="fa fa-search" />
                                                </button>
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    type="button"
                                                    data-toggle="modal"
                                                    data-target="#exampleModal"
                                                >
                                                    <i class="fas fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-header">Daftar Pasien</div>

                            <div class="card-body">Dashboard Rekam medik</div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModal">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Pasien Baru</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <CreatePasien />
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registrasi;

if (document.getElementById("registrasi")) {
    ReactDOM.render(<Registrasi />, document.getElementById("registrasi"));
}
