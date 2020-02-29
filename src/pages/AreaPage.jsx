import React from 'react';
import { withRouter, Link, Redirect } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../stores/MainStore";
import '../styles/area.css';
import background from '../images/background.jpeg';

import Header from '../components/Header';
import AreaForm from '../components/AreaForm';
import TeamList from '../components/TeamList';
import TeamInfoModal from '../components/TeamInfoModal';
import MemberInfoModal from '../components/MemberInfoModal';

class AreaPage extends React.Component {
    state = {
        showTeamInfo: false,
        showMemberInfo: false,
    }

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

    teamDetailButton = (id) => {
        this.props.getTeamInfo(id)
        this.setState({showTeamInfo:true})
    }

    closeTeamInfoModal = () => {
        this.props.emptyData('teamInfo')
        this.setState({showTeamInfo:false})
    }

    memberDetailButton = (id) => {
        console.log('clicking member lol')
        this.props.getMemberInfo(id)
        this.setState({showMemberInfo:true})
    }

    closeMemberInfoModal = () => {
        this.props.emptyData('memberInfo')
        this.setState({showMemberInfo:false})
    }

    memberInfoButton = () => {

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
                                            <TeamList
                                                name={element.name}
                                                id={element.id}
                                                image={element.crestUrl}
                                                handleOnClick={this.teamDetailButton}
                                            />
                                        ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <TeamInfoModal
                    show={this.state.showTeamInfo}
                    handleClose={this.closeTeamInfoModal}
                    loadData={this.props.loadTeamInfo}
                    data={this.props.teamInfo}
                    handleOnClick={this.memberDetailButton}
                    />
                <MemberInfoModal
                    show={this.state.showMemberInfo}
                    handleClose={this.closeMemberInfoModal}
                    loadData={this.props.loadMemberInfo}
                    data={this.props.memberInfo}
                    />
            </React.Fragment>
        )
    }
}
export default connect('worldArea, loadWorldArea, selectedRegionId, regionArea, loadRegionArea, selectedAreaId, teamList, loadTeamList, teamInfo, loadTeamInfo, memberInfo, loadMemberInfo', actions)(withRouter(AreaPage));