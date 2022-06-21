import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class Teams1654803389716 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'teams',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }),
    true)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('teams')
  }
}
