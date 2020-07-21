
export function github_repos (state, payload) {
    state.github_repos = []
    state.github_repos.push(...payload)
}

