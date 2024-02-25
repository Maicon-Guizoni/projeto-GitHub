const scrim = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">                           
                            <img src="${user.avatarUrl}" alt="Foto de perfil do usuario" />
                            <div class="data">
                            <div class="data-info">
                               <h1>${user.name ?? 'Não possui nome cadastrado 😢'} </h1>
                                <p>${user.bio ?? ' Não possui Bio cadastrada 😢'}</p>
                                </div>
                                <p>Esse usuário tem <span class="follow">${user.followers}</span> seguidores </p>
                                <p>Esse usuário segue <span class="follow">${user.following}</span> pessoas </p>
                            </div>
                         </div>`
        
     let eventsItens = ''
         if (user.events.length === 0) {
            eventsItens = '<li><span>O usuário não possui eventos recentes</span></li>';
        } else {
            user.events.forEach(event => {
         if (event.type === 'PushEvent') {
            eventsItens += `<li> <a href="${event.html_url}" target="_blank"> ${event.repo.name} </a>
                            <span>- ${event.payload.commits[0].message}</span></li>`;
            } else if (event.type === 'CreateEvent') {
            eventsItens += `<li><a href="${event.html_url}" target="_blank"> ${event.repo.name} </a>
                            <span>- ${event.payload.description} </span></li>`;
            }
    })
        }
        console.log(eventsItens)
                 
this.userProfile.innerHTML += `<div class="events-itens">
                                <h2>Eventos</h2>
                                <ul>${eventsItens}</ul>
                                </div>`                        

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens +=
            `<li> <a href="${repo.html_url}" target="_blank"> ${repo.name} <br>
            <span class="icons">💫${repo.forks_count} </span>
            <span class="icons">🌟${repo.stargazers_count} </span>
            <span class="icons">👀${repo.watchers_count} </span>
            <span class="icons">📘${repo.language} </span>
                    </a>
                </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                            </div>`

        }
    },

    renderNotFound() {
        this.userProfile.innerHTML = "<h3> Usuário não encontrado</h3>"
    }
}
export{ scrim }

