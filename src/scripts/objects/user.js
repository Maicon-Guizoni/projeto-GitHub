const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    
    repositories: [],
    events:[],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        this.nameRepo = gitHubUser.repo
    },
    setRepositories(repositories) {
        this.repositories = repositories
    },
    setEventos(eventos) {
        this.events = eventos
    }
}

export {user}