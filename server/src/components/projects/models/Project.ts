import { Column, Entity, OneToMany, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Technology } from '../../technologies/models/Technology';
import { ProjectDetail } from './ProjectDetail';

@Entity({ schema: 'portfolio', name: 'projects' })
export class Project {
	@PrimaryGeneratedColumn({ name: 'project_id' })
	public projectId!: number;

	@Column()
	public name!: string;

	@Column({ name: 'tagline' })
	public tagline!: string;

	@Column({ name: 'github_link' })
	public githubUrl!: string;

	@Column({ name: 'site_link' })
	public demoUrl!: string;

	@OneToMany(type => ProjectDetail, projectDetail => projectDetail.Project)
	public projectDetails!: ProjectDetail[];

	@Column({ name: 'file_name' })
	public fileName!: string;

	@Column({ name: 'order_id' })
	public orderId!: number;

	@Column({ name: 'date_deleted' })
	public dateDeleted!: Date;

	@ManyToMany(type => Technology, technology => technology.technologyId)
	@JoinTable({ name: 'Project_Project__technologies' })
	public technologies!: Technology[];
}
