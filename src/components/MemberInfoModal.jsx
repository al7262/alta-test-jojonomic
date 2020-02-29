import React from 'react';
import '../styles/team-info.css';
import Modal from 'react-bootstrap/Modal'

// Stateless component for header
const MemberInfoModal = (props) => {
    return (
        <React.Fragment>
            <Modal show={props.show}
                onHide={props.handleClose}
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title>Member Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.loadData||props.data===undefined?
                    <h1>Loading.....</h1>
                    :
                    <div className="container team-info">
                        <div className="row team-detail">
                            <div className="col-12 details">
                                <div className="row">
                                    <div className="col-4">Full Name</div>
                                    <div className="col-8">: {props.data.name}</div>
                                </div>
                                <div className="row">
                                    <div className="col-4">First Name</div>
                                    <div className="col-8">: {props.data.firstName}</div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Last Name</div>
                                    <div className="col-8">: {props.data.lastName===null? 'No Last Name' : props.data.lastName}</div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Date of Birth</div>
                                    <div className="col-8">: {props.data.dateOfBirth}</div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Origin</div>
                                    <div className="col-8">: {props.data.countryOfBirth}</div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Nationality</div>
                                    <div className="col-8">: {props.data.nationality}</div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Position</div>
                                    <div className="col-8">: {props.data.position}</div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Shirt Number</div>
                                    <div className="col-8">: {props.data.shirtNumber===null? 'Not Registered' : props.data.shirtNumber}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default MemberInfoModal;