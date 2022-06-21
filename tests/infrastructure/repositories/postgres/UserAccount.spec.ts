import { PGTeam } from '@/infrastructure/repositories/postgres/entities'
import { PGTeamRepository } from '@/infrastructure/repositories/postgres'
import { PGConnection } from '@/infrastructure/repositories/postgres/helpers'
import { PGRepository } from '@/infrastructure/repositories/postgres/Repository'
import { makeFakeDb } from '@/tests/infrastructure/repositories/mocks'

import { IBackup } from 'pg-mem'

describe('PGUserAccountRepository', () => {
  let sut: PGTeamRepository
  let connection: PGConnection
  let backup: IBackup

  beforeAll(async () => {
    connection = PGConnection.getInstance()
    const db = await makeFakeDb([PGTeam])
    backup = db.backup()
  })

  afterAll(async () => {
    await connection.disconnect()
  })

  beforeEach(() => {
    backup.restore()
    sut = new PGTeamRepository()
  })

  it('should extend PGRepository', async () => {
    expect(sut).toBeInstanceOf(PGRepository)
  })

  describe('load', () => {
    it('should return an account if email exists', async () => {
      const account = await sut.listAll()
      expect(account).toBeDefined()
    })
  })
})
