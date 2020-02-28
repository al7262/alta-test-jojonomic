import React from 'react';
import { withRouter, Link, Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../stores/MainStore";
import '../styles/area.css';
import background from '../images/background.jpeg';
import noimage from '../images/noimage.png';

import Header from '../components/Header';
import AreaForm from '../components/AreaForm';

class AreaPage extends React.Component {
    componentDidMount(){
        if(this.props.worldArea===undefined){
            this.props.getWorldChildArea()
        }
    }
    componentDidUpdate(){
        this.props.handleError()
    }
    areaFormButton = () => {
        this.props.getAreaTeam()
        const selectedArea = this.props.regionArea.filter(element=>{
            return element.id===parseInt(this.props.selectedAreaId)
        })
        let name = selectedArea[0].name.replace(' ', '-').toLowerCase()
        this.props.history.push('/area/'+name)
    }
    render(){
        let areaName = this.props.match.params.area
        console.log(areaName)
        if(areaName!==undefined){
            areaName = areaName.replace('-', ' ')
        }
        if(this.props.selectedAreaId===''&&this.props.selectedRegionId===undefined&&areaName!==undefined){
            return <Redirect to='/area'/>
        }
        return (
            <React.Fragment>
                <Header/>
                <div className="container-area">
                    <div className="background">
                        <img src={background} alt="background-home"/>
                        <div className="background-mask"></div>
                    </div>
                    <div className="container">
                        <div className="area-name">
                            <h3>
                                <span>Area: </span>
                                <Link className="btn-change"
                                    data-toggle="collapse" data-target="#area-form"
                                    aria-controls="navbarToggleExternalContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    {areaName===undefined? 'Not Selected' : areaName}
                                </Link>
                            </h3>
                        </div>
                        <div className="collapse" id="area-form">
                            <AreaForm 
                                handleOnClick = {this.areaFormButton}
                                {...this.props}/>
                        </div>
                        <div className="content-box">
                            <div className="row">
                                {areaName===undefined? 
                                <h1>Please select area first!</h1>
                                : 
                                this.props.loadTeamList?
                                    <h1>Loading....</h1>
                                    :
                                    this.props.teamList.length===0?
                                        <h1>There is no team in this area</h1>
                                        :
                                        this.props.teamList.map(element=>(
                                        <div className="col-lg-4 col-12 col-sm-6 outer-box">
                                            <div className="item-box">
                                                {console.log(element.crestUrl)}
                                                <img src={element.crestUrl!==null&&element.crestUrl!==''?element.crestUrl:noimage} alt="club-crest"
                                                    className={element.crestUrl===null||element.crestUrl===''?'rounded-circle':''}/>
                                                <h3>{element.name}</h3>
                                                <Link className="btn btn-details">See Details</Link>
                                            </div>
                                        </div>
                                        ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default connect('worldArea, loadWorldArea, selectedRegionId, regionArea, loadRegionArea, selectedAreaId, teamList, loadTeamList', actions)(withRouter(AreaPage));