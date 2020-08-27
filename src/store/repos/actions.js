import axios from "axios";
import { Notify } from 'quasar'

export function load_github_repos ( {commit} ) {
    axios
      .get('https://api.github.com/users/Mr-browny/repos?type=owner')
      .then(res => { 
          commit('github_repos', res.data) 
      })
      .catch(err => console.log(err)) 
};

export function add_from_github_repo({commit, state}, payload) {  
    // Checking if such repo already exists
    if(state.current_repos.find( ({id}) => id == payload.id) ){ 
        Notify.create({
            type: 'info',
            message: 'Project Already Exist.'
          })
    }else{ 
        commit('add_from_github_repo', payload)
    }
};

export function edit_current_repo({commit, state}, payload){  
    // Checking that the project exists truely
    if(state.current_repos.find( ({id}) => id == payload.id) ){ 
        commit('edit_repo', payload)
    }else{
        Notify.create({
            type: 'info',
            message: 'Project Does not Exist'
          })
    }
}

