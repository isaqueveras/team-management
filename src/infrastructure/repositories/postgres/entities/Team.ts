import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'teams' })
export class PGTeam {
  @PrimaryGeneratedColumn({ name: 'id' })
  id!: string

  @Column({ name: 'name' })
  name!: string

  @Column({ name: 'created_at', default: 'now()' })
  createdAt!: Date
}
