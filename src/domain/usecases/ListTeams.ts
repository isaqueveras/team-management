import { ListTeamsRepository } from '@/domain/contracts/repositories'

type setup = (repository: ListTeamsRepository) => ListAllTeamsUseCase
export type ListAllTeamsUseCase = () => Promise<Output[]>

export const setupListAllTeamsUseCase: setup = (repository) => async () => {
  return await repository.listAll()
}

type Output = {
  id: string
  name: string
  createdAt: Date
}
