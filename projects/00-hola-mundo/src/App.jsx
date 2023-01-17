import { useState } from 'react'
import './App.css'
import { FollowCard } from './FollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true,
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

export function App () {
  const [state, setState] = useState(0)

  return (
    <section className="App">
      {
        users.map(({ userName, name, isFollowing }) => (
          <FollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </FollowCard>
        ))
      }
      <button onClick={() => setState(state + 1)}>Has Clickeado : {state} numero de veces</button>
    </section>
  )
}
