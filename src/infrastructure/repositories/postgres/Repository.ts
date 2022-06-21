import { PGConnection } from '@/infrastructure/repositories/postgres/helpers'

import { ObjectType, Repository } from 'typeorm'

export abstract class PGRepository {
  constructor (private readonly connection: PGConnection = PGConnection.getInstance()) {}

  getRepository<Entity> (entity: ObjectType<Entity>): Repository<Entity> {
    return this.connection.getRepository(entity)
  }
}
