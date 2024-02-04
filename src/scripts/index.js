import { getUser } from "./src/scripts/services/user.js";
import { getRepositories } from "./src/scripts/services/repositories.js";
import { getEvents } from './src/scripts/services/events.js'

import { user } from "./src/scripts/objects/user.js"
import { screen } from "./src/scripts/objects/screen.js"


document.getElementById('btn-search').addEventListener('click', () => {
  const userName = document.getElementById('input-search').value
  if(validateEntry(userName)) return
  getUserData(userName)
})

document.getElementById('input-search').addEventListener('keypress', (e) => {
  const userName = e.target.value
  if (e.key === 'Enter') {
    if(validateEntry(userName)) return
    getUserData(userName)
  }
})

function validateEntry(userName) {
  if(userName.length === 0) {
    alert("Type your Github username, please!")
    return true
  }
}

async function getUserData(userName) {

  const userResponse = await getUser(userName)
 
  if(userResponse.message === "Not Found") {
    screen.renderNotFound()
    return
  }

  const respositoriesResponse = await getRepositories(userName)
  const userEvents = await getEvents(userName)

  user.setInfo(userResponse)
  user.setRepositories(respositoriesResponse)
  user.setEvents(userEvents)

  screen.renderUser(user)
}



