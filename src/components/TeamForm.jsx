import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/team-form.css';

// Stateless component for header
const TeamForm = (props) => {
    return (
        <React.Fragment>
            <div className="area-choice">
                <h2>Which area do you want to search?</h2>
                <form className="area-form">
                    <select className="custom-select" name="selectedRegionId" value={props.selectedRegionId} onChange={e=>props.getRegionArea(e)}>
                        {props.loadWorldArea?
                            <option value="" disabled selected>Loading...</option>
                            :
                            <React.Fragment>
                                <option value="" disabled selected>Select Region</option>
                                {props.worldArea.map(element=>(
                                    <option value={element.id}>{element.name}</option>
                                ))}
                            </React.Fragment>
                        }
                    </select>
                    <select className="custom-select" name="selectedAreaId" value={props.selectedAreaId} onChange={e=>props.handleOnChange(e)}>
                        {props.selectedRegionId===undefined?
                        <option value="" disabled selected>No Region Selected</option>
                        :
                        props.loadRegionArea?
                            <option value="" disabled selected>Loading...</option>
                            :
                            <React.Fragment>
                                <option value="" disabled selected>Select Area</option>
                                {props.regionArea.map(element=>(
                                    <option value={element.id}>{element.name}</option>
                                ))}
                            </React.Fragment>
                        }
                    </select>
                    <Link className={"btn btn-find " + (props.selectedAreaId===''?'disabled':'')} onClick={props.handleOnClick}>Find Teams</Link>
                </form>
            </div>
        </React.Fragment>
    )
}

export default TeamForm;