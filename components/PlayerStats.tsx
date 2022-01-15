import React from 'react'

interface PlayerStatsProps {
  // players: { name: string; position: { x: number; y: number; z: number } }[]
}

const PlayerStats: React.FC<PlayerStatsProps> = ({}) => {
  const players = [
    { name: 'CopiedByKakashi', position: { x: 627, y: 23, z: 85 } },
    { name: 'CopiedByNinja', position: { x: 843, y: 81, z: 29 } },
    { name: 'omupHD', position: { x: 21, y: 73, z: 475 } },
    { name: 'juliayuli', position: { x: 789, y: 78, z: 365 } },
  ]
  return (
    <div className="border rounded-lg h-min p-4 max-w-xs prose sticky top-10">
      <h2 className="text-xl">Spieler Online</h2>
      <p className="text-gray-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
      <ul>
        {players.map((player) => (
          <li key={player.name}>{player.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default PlayerStats
