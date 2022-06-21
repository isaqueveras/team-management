import { PGTeamRepository } from '@/infrastructure/repositories/postgres'

export const makePGTeam = (): PGTeamRepository => {
  return new PGTeamRepository()
}
