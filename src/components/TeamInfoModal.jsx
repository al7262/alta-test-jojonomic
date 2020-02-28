import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/team-info.css';
import Modal from 'react-bootstrap/Modal'
import noimage from '../images/noimage.png'

// Stateless component for header
const TeamInfoModal = (props) => {
    return (
        <React.Fragment>
            <Modal show={props.show}
                onHide={props.handleClose}
                centered
                size="lg"
                >
                <Modal.Header closeButton>
                    <Modal.Title>Club Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.loadData||props.data===undefined?
                    <h1>Loading.....</h1>
                    :
                    <div className="container team-info">
                        <div className="row team-detail">
                            <div className="col-lg-4 img-box">
                                <img src={props.data.crestUrl!==null&&props.data.crestUrl!==''?props.data.crestUrl:noimage} alt="club-crest"/>
                            </div>
                            <div className="col-lg-8 details">
                                <div className="row">
                                    <div className="col-4">Name</div>
                                    <div className="col-8">: {props.data.name}</div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Address</div>
                                    <div className="col-8">: {props.data.address}</div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Phone</div>
                                    <div className="col-8">: {props.data.phone}</div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Website</div>
                                    <div className="col-8">: <a href={props.data.website} target='_blank'>go to Website</a></div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Email</div>
                                    <div className="col-8">: {props.data.email}</div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Colour Signature</div>
                                    <div className="col-8">: {props.data.clubColors}</div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Founded Year</div>
                                    <div className="col-8">: {props.data.founded}</div>
                                </div>
                            </div>
                        </div>
                        <hr className="w-100"/>
                        <div className="row member-details">
                            <div className="col-12">
                                <h3 className="m-0 font-weight-bold">Club Member</h3>
                                <div className="member-list">
                                    {props.data.squad.map(element=>(
                                        <Link className="member">
                                            {element.name}
                                        </Link>
                                        ))
                                    }
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

export default TeamInfoModal;