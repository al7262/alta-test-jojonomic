import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/team-form.css';
import noimage from '../images/noimage.png';
import '../styles/team-list.css'

// Stateless component for header
const TeamList = (props) => {
    return (
        <React.Fragment>
            <div className="col-lg-4 col-12 col-sm-6 outer-box">
                <div className="item-box">
                    <img src={props.image!==null&&props.image!==''?props.image:noimage} alt="club-crest"
                        className={props.image===null||props.image===''?'rounded-circle':''}/>
                    <h3>{props.name}</h3>
                    <Link className="btn btn-details" onClick={()=>props.handleOnClick(props.id)}>See Details</Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TeamList;