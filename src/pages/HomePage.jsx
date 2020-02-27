import React from 'react';
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../stores/MainStore";
import '../styles/home.css';
import background from '../images/background.jpeg';
import logo from '../images/logo.svg'

import Header from '../components/Header';
import TeamForm from '../components/TeamForm';

class HomePage extends React.Component {
    componentDidMount(){
        this.props.getWorldChildArea()
    }
    teamFormButton = () => {
        // this.props.getAreaTeam()
        const selectedArea = this.props.regionArea.filter(element=>{
            return element.id===parseInt(this.props.selectedAreaId)
        })
        let name = selectedArea[0].name.replace(' ', '-').toLowerCase()
        this.props.history.push('/area/'+name)
    }
    render(){
        return (
            <React.Fragment>
                <Header/>
                <div className="container-home">
                    <div className="background">
                        <img src={background} alt="background-home"/>
                        <div className="background-mask"></div>
                    </div>
                    <div className="content">
                        <div className="logo">
                            <img src={logo} alt="website-logo"/>
                            <h1>SoccerManic</h1>
                        </div>
                        <TeamForm
                            handleOnClick = {this.teamFormButton}
                            {...this.props}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default connect('worldArea, loadWorldArea, selectedRegionId, regionArea, loadRegionArea, selectedAreaId', actions)(withRouter(HomePage));