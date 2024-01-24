const user = {
  avatarUrl: '',
  name: '',
  bio: '',
  userName: '',
  followers: '',
  following: '',
  repositories: [],
  events: [],
  setInfo(githubUser) {
    this.avatarUrl = githubUser.avatar_url;
    this.name = githubUser.name;
    this.bio = githubUser.bio;
    this.userName = githubUser.login
    this.followers = githubUser.followers
    this.following = githubUser.following
    
  },

  setRepositories(repositories) {
    this.repositories = repositories;
  },

  setEvents(events){
    let eventsFilter = events.filter(item => item.type === "PushEvent" || item.type === "CreateEvent");
    this.events = eventsFilter
},
}

export { user}