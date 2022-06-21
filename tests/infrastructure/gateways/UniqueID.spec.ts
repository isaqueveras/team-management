import { UniqueID } from '@/infrastructure/gateways'

import { set, reset } from 'mockdate'

describe('UniqueID', () => {
  let sut: UniqueID

  beforeAll(() => {
    set(new Date(2021, 9, 3, 10, 10, 10))
    sut = new UniqueID()
  })

  afterAll(() => {
    reset()
  })

  it('should create a unique id', () => {
    const uuid = sut.uuid({ key: 'any_key' })
    expect(uuid).toBe('any_key_20210903101010')
  })
})
