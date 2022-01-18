import React from 'react'
import Avatar from '../../components/Avatar'
import Container from '../../components/Container'
import Layout from '../../components/Layout'
import Link from '../../components/Link'
import players from '../../utils/players'
import tasks from '../../utils/tasks'

const Players: React.FC = () => (
  <Layout title="Fluffy Tuffys | Spieler">
    <Container players={players}>
      <h1>Spieler</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur velit,
        adipisci reprehenderit maiores nesciunt doloribus mollitia! Incidunt
        enim debitis quod provident molestiae libero ex temporibus natus neque
        veniam, architecto sint!
      </p>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Letzte bekannte Position</th>
            <th>Zuletzt online</th>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.uuid} className="mb-4">
              <td>
                <Link
                  href={`/players/${player.name}`}
                  className="flex items-center gap-2"
                >
                  <Avatar src={`https://crafatar.com/avatars/${player.uuid}`} />
                  {player.name}
                </Link>
              </td>
              <td>
                {player.position.x}, {player.position.y}, {player.position.z}
              </td>
              <td>{new Date(player.lastOnline).toLocaleDateString()}</td>
              <td>
                {tasks
                  .filter((task) => task.assignedTo.includes(player.uuid))
                  .map((task) => task.name)
                  .join(', ')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  </Layout>
)

export default Players
