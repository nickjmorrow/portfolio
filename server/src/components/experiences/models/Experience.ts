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

	@Column({name: 'start_date'})
	startDate!: Date;

	@Column({name: 'end_date'})
	endDate!: Date;

	@Column({name: 'is_current'})
	isCurrent!: boolean;

	@Column({name: 'role_name'})
	roleName!: string;

	@Column()
	location!: string;

	@OneToMany(
		type => ExperienceDetail,
		experienceDetail => experienceDetail.Experience
	)
	experienceDetails!: ExperienceDetail[];

	@ManyToMany(type => Technology, technology => technology.technologyId)
	@JoinTable({ name: "Experience_Experience__technologies" })
	technologies!: Technology[];
}
