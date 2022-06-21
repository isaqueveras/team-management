import { ConnectionNotFoundError } from '@/infrastructure/repositories/postgres/helpers'

import { createConnection, getConnection, getConnectionManager, QueryRunner, ObjectType, Repository } from 'typeorm'

export class PGConnection {
  private static instance?: PGConnection
  private query?: QueryRunner

  private constructor () {}

  static getInstance (): PGConnection {
    if (PGConnection.instance === undefined) PGConnection.instance = new PGConnection()
    return PGConnection.instance
  }

  async connect (): Promise<void> {
    const connection = getConnectionManager().has('default') ? getConnection() : await createConnection()
    this.query = connection.createQueryRunner()
  }

  async disconnect (): Promise<void> {
    if (this.query === undefined) throw new ConnectionNotFoundError()
    await getConnection().close()
    this.query = undefined
  }

  async openTransaction (): Promise<void> {
    if (this.query === undefined) throw new ConnectionNotFoundError()
    await this.query.startTransaction()
  }

  async closeTransaction (): Promise<void> {
    if (this.query === undefined) throw new ConnectionNotFoundError()
    await this.query.release()
  }

  async commit (): Promise<void> {
    if (this.query === undefined) throw new ConnectionNotFoundError()
    await this.query.commitTransaction()
  }

  async rollback (): Promise<void> {
    if (this.query === undefined) throw new ConnectionNotFoundError()
    await this.query.rollbackTransaction()
  }

  getRepository<Entity> (entity: ObjectType<Entity>): Repository<Entity> {
    if (this.query === undefined) throw new ConnectionNotFoundError()
    return this.query.manager.getRepository(entity)
  }
}
