import axios from "axios";

export function load_github_repos ( {commit} ) {
    axios
      .get('https://api.github.com/users/Mr-browny/repos?type=owner')
      .then(res => { 
          commit('github_repos', res.data) 
      })
      .catch(err => console.log(err)) 
}

