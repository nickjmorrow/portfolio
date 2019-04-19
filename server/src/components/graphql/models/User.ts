import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: "portfolio", name: "users" })
export class User {
	@PrimaryGeneratedColumn({ name: "user_id" })
	userId!: number;

	@Column({ name: "name" })
	name!: string;
}
