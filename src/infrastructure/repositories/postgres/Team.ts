import { PGTeam } from '@/infrastructure/repositories/postgres/entities'
import { PGRepository } from '@/infrastructure/repositories/postgres/Repository'
import { ListTeamsRepository } from '@/domain/contracts/repositories'
import { Team } from '@/domain/entities'

type Output = ListTeamsRepository.Output

export class PGTeamRepository extends PGRepository implements ListTeamsRepository {
  async listAll (): Promise<Output[]> {
    const repo = this.getRepository(PGTeam)
    const data = await repo.find()

    const teams: Team[] = []
    for (const team of data) {
      teams.push(new Team(team.id, team.name, team.createdAt))
    }

    return teams
  }
}
