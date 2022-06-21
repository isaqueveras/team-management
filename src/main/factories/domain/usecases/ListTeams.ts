import { makePGTeam } from '@/main/factories/infrastructure/repositories'
import { setupListAllTeamsUseCase, ListAllTeamsUseCase } from '@/domain/usecases'

export const makeListTeamsUseCase = (): ListAllTeamsUseCase => {
  return setupListAllTeamsUseCase(makePGTeam())
}
