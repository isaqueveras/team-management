import { makeListTeamsUseCase } from '@/main/factories/domain/usecases'
import { ListTeamsController } from '@/application/controllers'

export const makeListTeamsController = (): ListTeamsController => {
  return new ListTeamsController(makeListTeamsUseCase())
}
