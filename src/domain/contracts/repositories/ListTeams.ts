export interface ListTeamsRepository {
  listAll: () => Promise<ListTeamsRepository.Output[]>
}

export namespace ListTeamsRepository {
  export type Output = {
    id: string
    name: string
    createdAt: Date
  }
}
