import { UniqueID, UUIDHandler } from '@/infrastructure/gateways'

export const makeUUIDHandler = (): UUIDHandler => {
  return new UUIDHandler()
}

export const makeUniqueID = (): UniqueID => {
  return new UniqueID()
}
