export const deinitializeDatabase = `
	DROP TABLE portfolio.settings;

	DROP TABLE portfolio."Project_Project__technologies";
	
	DROP TABLE portfolio."Experience_Experience__technologies";

	DROP TABLE portfolio.project_details;

	DROP TABLE portfolio.experience_details;

	DROP TABLE portfolio.technologies;

	DROP TABLE portfolio.skill_levels;

	DROP TABLE portfolio.projects;

	DROP TABLE portfolio.experiences;

	DROP SCHEMA portfolio;
`;

export const initializeDatabase = `
	CREATE SCHEMA portfolio;

	CREATE TABLE portfolio.settings (
		setting_id VARCHAR(100) NOT NULL PRIMARY KEY
		, value VARCHAR(255) NOT NULL
	);

	CREATE TABLE portfolio.skill_levels (
		skill_level_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
		, description VARCHAR(255) NOT NULL UNIQUE
	);

	INSERT INTO portfolio.skill_levels (description)
	VALUES
		('Familiar')
		, ('Proficient');

	CREATE TABLE portfolio.technologies (
		technology_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
		, name VARCHAR(255) NOT NULL UNIQUE
		, skill_level_id INT NOT NULL REFERENCES portfolio.skill_levels(skill_level_id)
		, version VARCHAR(255) NULL
		, date_created DATE NOT NULL DEFAULT CURRENT_DATE
		, date_deleted DATE NULL
	);
	
	INSERT INTO portfolio.technologies (name, skill_level_id, version)
	VALUES
		('C#', 2, '8.0')
		, ('TypeScript', 2, '3.4')
		, ('SQL Server', 2, NULL)
		, ('JavaScript', 2, NULL)
		, ('PostgreSQL', 1, NULL)
		, ('Python', 1, NULL)
		, ('React.js', 2, '16.8')
		, ('Node.js', 1, NULL)
		, ('.NET Core', 1, '3.0')
		, ('Git', 2, NULL)
		, ('Redux', 2, NULL)
		, ('REST Services', 2, NULL)
		, ('MongoDB', 1, NULL);
	
	CREATE TABLE portfolio.experiences (
		experience_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
		, name VARCHAR(255) NOT NULL
		, role_name VARCHAR(255) NOT NULL
		, location VARCHAR(255) NOT NULL
		, start_date DATE NOT NULL
		, end_date DATE NULL
		, is_current BOOLEAN NOT NULL
		, link VARCHAR(255) NOT NULL
	);

	INSERT INTO portfolio.experiences (name, start_date, end_date, is_current, role_name, location)
	VALUES
		('Mastercard / Applied Predictive Technologies', '2019-07-17', null, true, 'Software Quality Assurance Engineer', 'New York, NY')
		, ('Babcock Wilcox Technologies', '2018-05-21', '2018-08-16', false, 'Engineering Intern', 'Erwin, TN');
	
	CREATE TABLE portfolio.experience_details (
		experience_detail_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
		, experience_id INT NOT NULL REFERENCES portfolio.experiences(experience_id)
		, description VARCHAR(500) NOT NULL 
		, order_id INT NOT NULL
		, UNIQUE (experience_id, order_id)
	);

	INSERT INTO portfolio.experience_details (experience_id, description, order_id)
	VALUES
		(1, 'Implemented database setting management component in C# and React to enable delivery team to change product behavior for any instance without reliance on the engineering team, improving product scalability.', 1)
		, (1, 'Designed and implemented user interface testing infrastructure in C# Selenium for React application, re- ducing production defects and increasing Jenkins deployment efficiency.', 2)
		, (1, 'Worked in a team of 8 to design, implement, and test a .NET application that would provide analytic in- sights using the MasterCard transaction log persisted in SQL Server and enable banks to make data-driven decisions. Focused on automated testing of data source features and data model configurations.', 3)
		, (1, 'Implemented integration testing of .NET analytics API and inclusion in Jenkins CI pipeline, preventing unexpected regressions from reaching production and improving deployment efficiency by 30%.', 4)
		, (1, 'Worked in a team of 7 on a React, .NET application for optimizing instance setup and automating data model configuration for clients of the MasterCard analytic engine, enabling scalability by reducing instance setup time by 70%. Focused on unit testing and rollout simulation in a testing environment.', 5)
		, (2, 'Designed chemical tank transfer system using AutoCAD to be used during plant operations involving a streamlined and reliable transfer of blended low-enriched Uranium.', 1);

	CREATE TABLE portfolio.projects (
		project_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
		, name VARCHAR(255) NOT NULL
		, order_id INT NOT NULL
		, date_deleted DATE NULL
		, github_link VARCHAR(255) NOT NULL
		, site_link VARCHAR(255) NOT NULL
	);

	INSERT INTO portfolio.projects (name, order_id, github_link, site_link)
	VALUES
		('Hierarchical Clustering of Google Maps Locations', 1, 'https://github.com/nickjmorrow/map-clustering', 'https://nickjmorrow.github.io/map-clustering/')
		, ('Weather Analytics and Extrema Monitoring', 2, 'https://github.com/nickjmorrow/weird-weather', 'https://nickjmorrow.github.io/weird-weather/')
		, ('React UI Component Library', 3, 'https://github.com/nickjmorrow/react-component-library', 'https://nickjmorrow.github.io/react-component-library/')
		, ('Spoiler-Free TV Show Information Aggregator', 4, 'https://github.com/nickjmorrow/first-few', 'https://nickjmorrow.github.io/first-few/')

	CREATE TABLE portfolio.project_details (
		project_detail_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
		, project_id INT NOT NULL REFERENCES portfolio.projects(project_id)
		, description VARCHAR(255) NOT NULL
		, order_id INT NOT NULL
		, UNIQUE(project_id, order_id)
	);

	INSERT INTO portfolio.project_details (project_id, description, order_id) 
		VALUES
			(1, '.NET application to read the KML exported Google Maps locations, perform agglomerative hierarchical clustering, and display the information on a React frontend with persistence in AWS hosted SQL Server.', 1)
			, (1, 'Able to change clustering parameters and view how places of interest in popular cities are grouped to- gether, surfacing geographic insights and enabling better vacation planning.', 2)
			, (2, '.NET application to query the DarkSky API on a daily cadence, record weather data of 100 U.S. cities, and calculate and persist lookback aggregations in AWS hosted SQL Server. Containerized in Docker for deployment.', 1)
			, (2, 'React front-end for city rankings by weather condition, geographic comparison, and drilling into outliers for further insights across lookback period.', 2)
			, (3, 'Designed a responsive component library in React focusing on system adherence and configurability.', 1)
			, (3, 'High-level design decisions could be made up-front like color, spacing, and typography, which would propagate to all components while still allowing one-off departures.', 2)
			, (4, 'NodeJS application to consolidate TV show information from various APIs and persist it in a MongoDB database for later retrieval.', 1)
			, (4, 'ReactJS and Redux front-end to display TV show analytics and recommendations to enable users to decide whether to commit to a show without risking spoilers.', 2);
			
	CREATE TABLE portfolio."Experience_Experience__technologies" (
		"experiencesExperienceId" INT NOT NULL REFERENCES portfolio.experiences(experience_id)
		, "technologiesTechnologyId" INT NOT NULL REFERENCES portfolio.technologies(technology_id)
		, PRIMARY KEY("experiencesExperienceId", "technologiesTechnologyId")
	);

	CREATE TABLE portfolio."Project_Project__technologies" (
		"projectsProjectId" INT NOT NULL REFERENCES portfolio.projects(project_id)
		, "technologiesTechnologyId" INT NOT NULL REFERENCES portfolio.technologies(technology_id)
		, PRIMARY KEY("projectsProjectId", "technologiesTechnologyId")
	);

	INSERT INTO portfolio."Project_Project__technologies" ("projectsProjectId", "technologiesTechnologyId") 
	VALUES
		(1, 1)
		, (1, 2)
		, (1, 3)
		, (1, 4)
		, (1, 7)
		, (1, 9)
		, (2, 1)
		, (2, 2)
		, (2, 3)
		, (2, 4)
		, (2, 7)
		, (2, 9)
		, (3, 2)
		, (3, 4)
		, (3, 7)
		, (4, 2)
		, (4, 4)
		, (4, 7)
		, (4, 8)
		, (4, 13);
`;
