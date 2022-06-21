import { PGConnection } from '@/infrastructure/repositories/postgres/helpers'

import { IMemoryDb, newDb } from 'pg-mem'

export const makeFakeDb = async (entities?: any[]): Promise<IMemoryDb> => {
  const db = newDb()
  const connection = await db.adapters.createTypeormConnection({
    type: 'postgres',
    entities: entities ?? ['src/infrastructure/repositories/postgres/entities/index.ts']
  })
  await connection.synchronize()
  await PGConnection.getInstance().connect()
  return db
}
