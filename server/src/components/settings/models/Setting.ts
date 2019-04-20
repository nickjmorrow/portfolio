import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ schema: "portfolio", name: "settings" })
export class Setting {
	@PrimaryColumn({ name: "setting_id" })
	settingId!: string;

	@Column({ name: "value" })
	value!: string;
}
