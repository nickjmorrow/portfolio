import {
	Column,
	Entity,
	JoinColumn,
	JoinTable,
	ManyToMany,
	ManyToOne,
	PrimaryGeneratedColumn,
	OneToMany,
} from 'typeorm';
import { Technology } from './models/Technology';

@Entity({ schema: 'portfolio', name: 'technology_types' })
export class TechnologyType {
	@PrimaryGeneratedColumn({ name: 'technology_type_id' })
	public technologyTypeId!: number;

	@Column()
	public name!: string;

	@Column({ name: 'order_id' })
	public orderId!: number;

	@OneToMany(type => Technology, technology => technology.technologyType)
	public Technology!: Technology;
}
