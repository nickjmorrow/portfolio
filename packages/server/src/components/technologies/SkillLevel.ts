import {
	Column,
	Entity,
	OneToOne,
	PrimaryGeneratedColumn,
	OneToMany
} from "typeorm";
import { Technology } from "./models/Technology";

@Entity({ schema: "portfolio", name: "skill_levels" })
export class SkillLevel {
	@PrimaryGeneratedColumn({ name: "skill_level_id" })
	skillLevelId!: number;

	@OneToMany(type => Technology, technology => technology.skillLevel)
	Technology!: Technology;

	@Column()
	description!: string;
}
