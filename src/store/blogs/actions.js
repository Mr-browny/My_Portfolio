import axios from "axios";

export function fetch_devTo_blogs ({commit}) {
    axios
        .get('https://dev.to/api/articles?username=mrbrowny')
        .then( res => {  
          commit('load_devTo_blogs', res.data) 
        })
        .catch( err => {
          console.log(err)
        })
} 
