import { Column, Entity, OneToMany, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Technology } from '../../technologies/models/Technology';
import { ProjectDetail } from './ProjectDetail';

@Entity({ schema: 'portfolio', name: 'projects' })
export class Project {
	@PrimaryGeneratedColumn({ name: 'project_id' })
	public projectId!: number;

	@Column()
	public name!: string;

	@OneToMany(type => ProjectDetail, projectDetail => projectDetail.Project)
	public projectDetails!: ProjectDetail[];

	@ManyToMany(type => Technology, technology => technology.technologyId)
	@JoinTable({ name: 'Project_Project__technologies' })
	public technologies!: Technology[];
}
