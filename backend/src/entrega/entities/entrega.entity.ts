import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class EntregaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 65})
    name: string

    @Column({length: 65})
    email: string
}
