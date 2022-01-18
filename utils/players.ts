export interface Player {
  uuid: string
  name: string
  lastOnline: number
  position: { x: number; y: number; z: number }
}

const players: Player[] = [
  {
    uuid: 'fec11781-371c-49bb-a10c-e9400b11ccc6',
    name: 'CopiedByKakashi',
    position: { x: 627, y: 23, z: 85 },
    lastOnline: 1642518142135,
  },
  {
    uuid: '4ff4980c-f73d-408e-a9f3-1ed2ca128a70',
    name: 'CopiedByNinja',
    position: { x: 843, y: 81, z: 29 },
    lastOnline: 1642518042135,
  },
  {
    uuid: 'dfa5034b-e7c0-4f09-9bbd-78be4928de3b',
    name: 'omupHD',
    position: { x: 21, y: 73, z: 475 },
    lastOnline: 164251842135,
  },
  {
    uuid: 'b849b3a5-ac51-43d6-9974-52e465047d87',
    name: 'juliayuli',
    position: { x: 789, y: 78, z: 365 },
    lastOnline: 164258142135,
  },
]

export default players
