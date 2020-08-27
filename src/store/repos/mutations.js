
export function github_repos (state, payload) {
    state.github_repos = []
    state.github_repos.push(...payload)
};

export function add_from_github_repo (state, payload) { 
    state.current_repos.push(payload)
};

export function edit_repo( state, payload){
    state.current_repos.find()
}

