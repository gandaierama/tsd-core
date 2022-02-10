import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class MotoboyEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 65})
    name: string

    @Column({length: 65})
    email: string
}
