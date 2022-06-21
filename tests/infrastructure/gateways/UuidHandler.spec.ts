import { UUIDHandler } from '@/infrastructure/gateways'

import { mocked } from 'ts-jest/utils'
import { v4 } from 'uuid'

jest.mock('uuid')

describe('UUIDHandler', () => {
  let sut: UUIDHandler

  beforeAll(() => {
    mocked(v4).mockReturnValue('any_uuid')
  })

  beforeEach(() => {
    sut = new UUIDHandler()
  })

  it('should call uuid.v4', () => {
    sut.uuid({ key: 'any_key' })
    expect(v4).toBeCalledTimes(1)
  })

  it('should return correct uuid', () => {
    const uuid = sut.uuid({ key: 'any_key' })
    expect(uuid).toBe('any_key_any_uuid')
  })
})
