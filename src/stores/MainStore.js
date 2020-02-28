import createStore from 'unistore';
import axios from 'axios';
import swal from 'sweetalert2';

const initialState = {
    baseUrl: 'https://api.football-data.org/v2/',
    apiToken: 'a1b4d039210f4729ab8cd931a0c11586',
    error: undefined,
    worldArea: undefined,
    loadWorldArea: true,
    regionArea: undefined,
    loadRegionArea: false,
    selectedRegionId: undefined,
    selectedAreaId: '',
    teamList: undefined,
    loadTeamList: true,
};

export const store = createStore(initialState);

export const actions = (store) => ({
    handleOnChange: (state, event) => {
        console.log(event.target.name, event.target.value)
        store.setState({[event.target.name]: event.target.value})
    },
    getWorldChildArea: (state)=>{
        const input = {
            method: 'get',
            headers: {
                'X-Auth-Token': state.apiToken,
            },
            url: state.baseUrl+'areas/2267',
            validateStatus: (status) => {
                return status<500
            }
        };
        axios(input)
        .then(async response=>{
            if(response.status===200){
                await store.setState({
                    worldArea: response.data.childAreas,
                    loadWorldArea: false
                })
            } else{
                await store.setState({error: response.data})
            }
        })
        .catch(error=>{
            console.log(error)
        })
    },

    getRegionArea: async (state, event) => {
        const value=event.target.value
        await store.setState({
            loadRegionArea:true,
            selectedRegionId: value,
            selectedAreaId: ''
        })
        const input = {
            method: 'get',
            headers: {
                'X-Auth-Token': state.apiToken,
            },
            url: state.baseUrl+'areas/'+value,
            validateStatus: (status) => {
                return status<500
            }
        };
        axios(input)
        .then(async response=>{
            if(response.status===200){
                const childAreas = response.data.childAreas
                if(childAreas.length===0){
                    childAreas.push(response.data)
                }
                await store.setState({
                    regionArea: childAreas,
                    loadRegionArea: false
                })
            } else{
                await store.setState({error: response.data})
            }
        })
        .catch(error=>{
            console.log(error)
        })
    },

    getAreaTeam: async(state) => {
        store.setState({loadTeamList:true})
        const input = {
            method: 'get',
            headers: {
                'X-Auth-Token': state.apiToken,
            },
            url: state.baseUrl+'teams',
            params:{
                areas: state.selectedAreaId
            },
            validateStatus: (status) => {
                return status<500
            }
        };
        axios(input)
        .then(async response=>{
            if(response.status===200){
                await store.setState({
                    teamList: response.data.teams,
                    loadTeamList: false
                })
            } else{
                await store.setState({error: response.data})
            }
        })
        .catch(error=>{
            console.log(error)
        })
    },

    handleError: async (state) => {
        if(state.error!==undefined){
          await swal.fire({
            title: `Error ${state.error.errorCode}!`,
            text: state.error.message,
            icon: 'error',
            timer: 1500,
            confirmButtonText: 'understood',
            confirmButtonColor: '#b36232',
          });
          await store.setState({error: undefined})
        }
    },
});