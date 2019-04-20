import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
	ManyToMany,
	JoinTable
} from "typeorm";
import { Experience } from "../../experiences/models/Experience";

@Entity({ schema: "portfolio", name: "technologies" })
export class Technology {
	@PrimaryGeneratedColumn({ name: "technology_id" })
	technologyId!: number;

	@Column()
	name!: string;

	@ManyToMany(type => Experience, experience => experience.experienceId)
	@JoinTable({ name: "Experience_Experience__technologies" })
	experiences!: Experience[];
}
