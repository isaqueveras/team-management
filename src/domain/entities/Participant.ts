export class Participant {
  id: number
  name: string
  email: string
  startDate: Date
  departureDate: Date

  constructor (id: number, name: string, email: string, startDate: Date, departureDate: Date) {
    this.id = id
    this.name = name
    this.email = email
    this.startDate = startDate
    this.departureDate = departureDate
  }
}
