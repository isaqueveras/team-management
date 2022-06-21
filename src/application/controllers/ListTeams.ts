import { Controller } from '@/application/controllers'
import { HttpResponse, ok, badRequest } from '@/application/helpers'
import { ListAllTeamsUseCase } from '@/domain/usecases'

export class ListTeamsController extends Controller {
  constructor (private readonly listTeams: ListAllTeamsUseCase) {
    super()
  }

  async perform (): Promise<HttpResponse<Model>> {
    try {
      const data = await this.listTeams()
      return ok(data)
    } catch (error: any) {
      return badRequest(error)
    }
  }
}

type Team = {
  id: string
  name: string
  createdAt: Date
}

type Model = Error | Team[]
