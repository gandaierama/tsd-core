import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class OrdemEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 65})
    name: string

    @Column({length: 65})
    email: string
}
