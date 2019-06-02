import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Experience } from "../../experiences/models/Experience";
import { SkillLevel } from "../SkillLevel";

@Entity({ schema: "portfolio", name: "technologies" })
export class Technology {
	@PrimaryGeneratedColumn({ name: "technology_id" })
	technologyId!: number;

	@Column()
	name!: string;

	@Column()
	version!: string;

	@ManyToMany(type => Experience, experience => experience.experienceId)
	@JoinTable({ name: "Experience_Experience__technologies" })
	experiences!: Experience[];

	@ManyToOne(type => SkillLevel, technology => technology.skillLevelId)
	@JoinColumn({ name: "skill_level_id" })
	skillLevel!: SkillLevel;
}
