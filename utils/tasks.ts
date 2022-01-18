export interface Task {
  id: string
  name: string
  description: string
  status: string
  createdAt: number
  assignedTo: string[]
}

const tasks: Task[] = [
  {
    id: '1',
    name: 'Task 1',
    description: 'Task 1 description',
    status: 'pending',
    createdAt: 1564251842135,
    assignedTo: [
      'fec11781-371c-49bb-a10c-e9400b11ccc6',
      '4ff4980c-f73d-408e-a9f3-1ed2ca128a70',
    ],
  },
  {
    id: '2',
    name: 'Task 2',
    description: 'Task 2 description',
    status: 'pending',
    createdAt: 1564251842135,
    assignedTo: [
      '4ff4980c-f73d-408e-a9f3-1ed2ca128a70',
      'b849b3a5-ac51-43d6-9974-52e465047d87',
    ],
  },
]

export default tasks
