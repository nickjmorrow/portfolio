import {
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	ManyToMany,
	JoinTable
} from "typeorm";
import { ExperienceDetail } from "./ExperienceDetail";
import { Technology } from "../../technologies/models/Technology";

@Entity({ schema: "portfolio", name: "experiences" })
export class Experience {
	@PrimaryGeneratedColumn({ name: "experience_id" })
	experienceId!: number;

	@Column()
	name!: string;

	@OneToMany(
		type => ExperienceDetail,
		experienceDetail => experienceDetail.Experience
	)
	experienceDetails!: Experience[];

	@ManyToMany(type => Technology, technology => technology.technologyId)
	@JoinTable({ name: "Experience_Experience__technologies" })
	technologies!: Technology[];
}
