const screen = {
  userProfile: document.querySelector('.profile-data'),
  renderUser(user) {
    this.userProfile.innerHTML = 
                    `<div class="info">
                      <img src="${user.avatarUrl}" alt="Foto do perfil //do    usuário"/>
                      <div class="data">
                        <h1>${user.name ?? 'No name registered 😢'}</h1>
                        <p>${user.bio ?? 'Bio not registered 😢'}</p>
                        <p>👥 Followers ${user.followers}</p>
                        <p>👤 Following ${user.following}</p>
                      </div>
                    </div>`
  
    let repositoriesItens = ''  
    user.repositories.forEach(repo => repositoriesItens += 
      
      `<li><a class="name-repositories" href="${repo.html_url}" target="_blank">${repo.name}
      <div class="wraper-repositories">
        <p>🍴${repo.forks}</p>
        <p>⭐${repo.stargazers_count}</p>
        <p>👀${repo.watchers}</p>
        <p>💻${repo.language ?? '-'}</p>
      </div>
    </a></li>`)   
    
    if(user.repositories.length > 0) {
      this.userProfile.innerHTML += 
      `<div class="repositories section">
        <h2 class="repositories-title">Repositories</h2>
        <ul>${repositoriesItens}</ul>
      </div>`
    }

    let eventsItens = ''
    user.events.forEach(event => {
        if(event.type === "CreateEvent"){
            eventsItens += `<li><span>${event.repo.name}</span> - Criação de Evento</li>`}
        else{
            eventsItens += `<li><span>${event.repo.name}</span> - ${event.payload.commits[0].message}</li>`}
    })

    if(user.events.length > 0){
        this.userProfile.innerHTML += `<div class="events">
                                        <h2 class="events-title">Events</h2>
                                        <ul>${eventsItens}</ul>
                                        </div>`
    }
  },
  renderNotFound() {
    this.userProfile.innerHTML = "<h3>User not found</h3>"
  },
}

export { screen }