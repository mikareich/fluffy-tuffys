import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import Avatar from '../../components/Avatar'
import Container from '../../components/Container'
import Layout from '../../components/Layout'
import Link from '../../components/Link'
import players, { Player } from '../../utils/players'
import allTasks, { Task } from '../../utils/tasks'

interface PlayerInfoProps {
  player: Player
  tasks: Task[]
}

const PlayerInfo: React.FC<PlayerInfoProps> = ({ player, tasks }) => (
  <Layout title={`Fluffy Tuffys | ${player.name}`}>
    <Container players={players}>
      <h1 className="flex items-center gap-2">
        <Avatar src={`https://crafatar.com/avatars/${player.uuid}`} size={48} />
        {player.name}
      </h1>
      <p>
        Der Spieler <b>{player.name}</b> hat zuletzt am{' '}
        <b>{new Date(player.lastOnline).toLocaleDateString()}</b> auf dem Server
        gespielt. Die letzte bekannte Position lautet:{' '}
        <b>
          {player.position.x}, {player.position.y}, {player.position.z}
        </b>
        .
      </p>
      <h2>Zugeteilte Tasks</h2>
      <table>
        <tr>
          <th>Task</th>
          <th>Beschreibung</th>
          <th>Status</th>
          <th>Erstellt</th>
        </tr>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>
              <Link href={`/tasks/${task.id}`}>{task.name}</Link>
            </td>
            <td>{task.description}</td>
            <td>{task.status}</td>
            <td>{new Date(task.createdAt).toLocaleDateString()}</td>
          </tr>
        ))}
      </table>
    </Container>
  </Layout>
)

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = players.map((player) => ({
    params: {
      name: player.name,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const player = players.find((p) => p.name === params!.name)!
  const tasks = allTasks.filter((task) => task.assignedTo.includes(player.uuid))

  return {
    props: {
      player,
      tasks,
    },
  }
}

export default PlayerInfo
