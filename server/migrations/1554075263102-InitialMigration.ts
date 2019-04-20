import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1554075263102 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<any> {
		const query = `
			CREATE SCHEMA portfolio;

			CREATE TABLE portfolio.projects (
				project_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
				, name VARCHAR(255) NOT NULL
			);

			INSERT INTO portfolio.projects (name)
			SELECT 'project one' UNION
			SELECT 'project two';

			CREATE TABLE portfolio.experiences (
				experience_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
				, name VARCHAR(255) NOT NULL
			);

			INSERT INTO portfolio.experiences (name)
			SELECT 'experience one' UNION
			SELECT 'experience two';

			CREATE TABLE portfolio.technologies (
				technology_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
				, name VARCHAR(255) NOT NULL
			);

			INSERT INTO portfolio.technologies (name)
			SELECT 'technology a' UNION
			SELECT 'technology b';

			CREATE TABLE portfolio.experience_details (
				experience_detail_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
				, experience_id INT NOT NULL REFERENCES portfolio.experiences(experience_id)
				, description VARCHAR(255) NOT NULL
			);

			INSERT INTO portfolio.experience_details (experience_id, description)
			SELECT 1, 'exp det one - 1' UNION
			SELECT 2, 'exp det one - 2' UNION
			SELECT 2, 'exp det two - 2';


			CREATE TABLE portfolio.experience_technologies (
				experience_id INT NOT NULL REFERENCES portfolio.experiences(experience_id)
				, technology_id INT NOT NULL REFERENCES portfolio.technologies(technology_id)
			);

			INSERT INTO portfolio.experience_technologies (experience_id, technology_id)
			SELECT 1, 2 UNION
			SELECT 2, 1 UNION
			SELECT 2, 2;

			CREATE TABLE portfolio.project_technologies (
				project_id INT NOT NULL REFERENCES portfolio.projects(project_id)
				, technology_id INT NOT NULL REFERENCES portfolio.technologies(technology_id)
			);

			INSERT INTO portfolio.project_technologies (project_id, technology_id)
			SELECT 1, 1 UNION
			SELECT 2, 2;
        `;

		await queryRunner.query(query);
	}

	public async down(queryRunner: QueryRunner): Promise<any> {
		const query = `
			DROP TABLE portfolio.experience_details;

			DROP TABLE portfolio.experience_technologies;

			DROP TABLE portfolio.project_technologies;

			DROP TABLE portfolio.projects;

			DROP TABLE portfolio.experiences;

			DROP TABLE portfolio.technologies;

			DROP SCHEMA portfolio;
		`;

		await queryRunner.query(query);
	}
}
