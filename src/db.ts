import type { EntityTable } from 'dexie'
import Dexie from 'dexie'

interface Todo {
  id: number
  text: string
  status: 'TODO' | 'DONE' | 'ARCHIVE'
  // created: Date // TODO
  // deadline: Date // TODO
}

const db = new Dexie('myDb') as Dexie & {
  todos: EntityTable<Todo, 'id'>
}

db.version(1).stores({
  todos: '++id, text, status',
})

export type { Todo }
export { db }
