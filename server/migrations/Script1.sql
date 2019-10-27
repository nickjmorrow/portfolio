DROP TABLE portfolio.experience_details;

DROP TABLE portfolio."Experience_Experience__technologies";

DROP TABLE portfolio."Project_Project__technologies";

DROP TABLE portfolio.project_details;

DROP TABLE portfolio.projects;

DROP TABLE portfolio.experiences;

DROP TABLE portfolio.technologies;

DROP TABLE portfolio.technology_types;

DROP TABLE portfolio.settings;

DROP TABLE portfolio.skill_levels;

DROP SCHEMA portfolio;

CREATE SCHEMA portfolio;

CREATE TABLE portfolio.settings (
    setting_id VARCHAR(255) NOT NULL PRIMARY KEY
    , value VARCHAR(255) NOT NULL
);

CREATE TABLE portfolio.skill_levels (
    skill_level_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , description VARCHAR(100) NOT NULL
);

INSERT INTO portfolio.skill_levels (skill_level_id, description)
OVERRIDING SYSTEM VALUE 
SELECT 1, 'Proficient'
UNION SELECT 2, 'Familiar';

INSERT INTO portfolio.settings (setting_id, value)
SELECT 'FULL_NAME', 'Nicholas Morrow';

CREATE TABLE portfolio.experiences (
    experience_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , name VARCHAR(255) NOT NULL
    , start_date DATE NULL
    , end_date DATE NULL
    , role_name VARCHAR(255) NOT NULL
    , location VARCHAR(255) NOT NULL
);

INSERT INTO portfolio.experiences (name, start_date, end_date, role_name, location)
SELECT 'Mastercard', CAST('2017-07-01' AS DATE), NULL, 'Software Quality Engineer', 'New York, NY' UNION
SELECT 'BWX Technologies', '2018-05-01', CAST('2018-08-01' AS DATE), 'Engineering Intern', 'Johnson City, TN' UNION
SELECT 'UVA Process Modelling', '2015-12-01', '2017-03-01', 'Teaching Assistant', 'Charlottesville, VA';

CREATE TABLE portfolio.experience_details (
    experience_detail_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , experience_id INT NOT NULL REFERENCES portfolio.experiences(experience_id)
    , description VARCHAR NOT NULL
);

INSERT INTO portfolio.experience_details (experience_id, description)
SELECT 1, 'Worked in a team of 7 on a React, .NET application for optimizing instance setup and automating data model configuration for clients of the MasterCard analytic engine, enabling scalability by reducing instance setup time by 70%. Focused on unit testing and rollout simulation in a testing environment.' UNION
SELECT 1, 'Implemented integration testing of .NET analytics API and inclusion in Jenkins CI pipeline, preventing unexpected regressions from reaching production and improving deployment efficiency by 30%.' UNION
SELECT 1, 'Worked in a team of 8 to design, implement, and test a .NET application that would provide analytic insights using the MasterCard transaction log persisted in SQL Server and enable banks to make data-driven decisions. Focused on automated testing of data source features and data model configurations.' UNION
SELECT 1, 'Designed and implemented user interface testing infrastructure in C# Selenium for React application, reducing production defects and increasing Jenkins deployment efficiency.' UNION
SELECT 1, 'Implemented database setting management component in C# and React to enable delivery team to change product behavior for any instance without reliance on the engineering team, improving product scalability.' UNION
SELECT 2, 'Designed chemical tank transfer system using AutoCAD to be used during plant operations involving a streamlined and reliable transfer of blended low-enriched Uranium.' UNION
SELECT 3, 'I absolutely loved solving chemical engineering problems using a little bit of MATLAB magic. Cracking the puzzle, coding it up, and seeing some beautiful 2D diffusion gradient for some chemical process was cool enough to make me want to be a teaching assistant. Getting others to that "Aha!" moment made it such a fun time.';

CREATE TABLE portfolio.technology_types (
    technology_type_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , name VARCHAR(255) NOT NULL
    , order_id INT NOT NULL
);

INSERT INTO portfolio.technology_types (technology_type_id, name, order_id)
OVERRIDING SYSTEM VALUE 
SELECT 1, 'Languages', 1 UNION
SELECT 2, 'Frameworks & Libraries', 2 UNION
SELECT 3, 'Databases and Query Languages', 3 UNION 
SELECT 4, 'Tooling', 4 UNION 
SELECT 5, 'Testing', 5;

CREATE TABLE portfolio.technologies (
    technology_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , name VARCHAR(255) NOT NULL
    , skill_level_id INT NOT NULL REFERENCES portfolio.skill_levels(skill_level_id)
    , version VARCHAR(255) NULL
    , technology_type_id INT NOT NULL REFERENCES portfolio.technology_types(technology_type_id)
    , order_id INT NULL
);

INSERT INTO portfolio.technologies (name, skill_level_id, technology_type_id, order_id)
SELECT 'C#', 1, 1, 2
UNION SELECT 'TypeScript', 1, 1, 1
UNION SELECT 'JavaScript', 1, 1, 3 
UNION SELECT 'Node.js', 2, 1, 4 
UNION SELECT 'Go', 2, 1, 5
UNION SELECT 'Python', 2, 1, 4 
UNION SELECT 'React', 1, 2, 1
UNION SELECT 'Redux', 1, 2, 2
UNION SELECT 'Styled Components', 1, 2, 3
UNION SELECT '.NET Core', 2, 2, 4
UNION SELECT 'SQL Server', 1, 3, 1
UNION SELECT 'PostgreSQL', 2, 3, 3
UNION SELECT 'MongoDB', 2, 3, 2
UNION SELECT 'Git', 1, 4, 1
UNION SELECT 'Jenkins CI', 2, 4, 2
UNION SELECT 'Gatsby', 2, 2, 5
UNION SELECT 'Webpack', 2, 4, 4 
UNION SELECT 'Rollup', 2, 4, 3
UNION SELECT 'Selenium', 1, 5, 1
UNION SELECT 'Jest', 2, 5, 2; 

CREATE TABLE portfolio."Experience_Experience__technologies" (
    "experiencesExperienceId" INT NOT NULL REFERENCES portfolio.experiences(experience_id)
    , "technologiesTechnologyId" INT NOT NULL REFERENCES portfolio.technologies(technology_id)
);

CREATE TABLE portfolio.projects (
    project_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , name VARCHAR(255) NOT NULL
    , tagline VARCHAR(255) NOT NULL
    , github_link VARCHAR(255) NOT NULL
    , site_link VARCHAR(255) NULL
    , order_id INT NOT NULL
    , date_deleted DATE NULL
);

INSERT INTO portfolio.projects (name, tagline, github_link, site_link, order_id)
SELECT 'Hierarchical Clustering of Google Maps Locations', 'Cluster locations in popular cities and view optimal paths between them for better sight-seeing.', 'https://github.com/nickjmorrow/maps-clustering', 'https://nickjmorrow.github.io/maps-clustering', 1 
UNION SELECT 'Weather Analytics and Extrema Monitoring', 'Analyze weather extrema across various lookback periods to surface trends across time and region.', 'https://github.com/nickjmorrow/weird-weather', 'https://nickjmorrow.github.io/weird-weather', 2 
UNION SELECT 'React UI Component Library', 'Define design-decisions up-front with a component library while leaving space for one-off departures.', 'https://github.com/nickjmorrow/react-component-library', 'https://nickjmorrow.github.io/react-component-library', 3 
UNION SELECT 'Spoiler-Free TV Show Information Aggregator', 'Check out various analytics for a TV show before watching it, and ensure you won''t get spoiled in the process.', 'https://github.com/nickjmorrow/first-few', 'https://nickjmorrow.github.io/first-few', 4 
UNION SELECT 'Subreddit Subscription Automated Job', 'Automically import top posts from selected subreddits into your Pocket account.', 'https://github.com/nickjmorrow/subreddit-subscriber', 'https://nickjmorrow.github.io/subreddit-subscriber/', 5
UNION SELECT 'Professional Portfolio v1', 'Portfolio to showcase experiences, projects, and technologies.', 'https://github.com/nickjmorrow/portfolio', 'https://nickjmorrow.com/', 6 
UNION SELECT 'Blogging Platform', 'Personal blog to jot down thoughts on technology, software, and general development.', 'https://github.com/nickjmorrow/blog', 'https://nickjmorrow.com/blog', 7 
UNION SELECT 'Chore Scheduler', 'Productivity app to predictably schedule chores for the NY Mastercard WeWork office.', 'https://github.com/nickjmorrow/wework-scheduler', 'https://fervent-saha-b4b2b7.netlify.com/', 8;

CREATE TABLE portfolio."Project_Project__technologies" (
    "projectsProjectId" INT NOT NULL REFERENCES portfolio.projects(project_id)
    , "technologiesTechnologyId" INT NOT NULL REFERENCES portfolio.technologies(technology_id)
);

INSERT INTO portfolio."Project_Project__technologies" ("projectsProjectId", "technologiesTechnologyId")
SELECT 6, 20 
UNION SELECT 8, 20 
UNION SELECT 3, 20 
UNION SELECT 7, 20 
UNION SELECT 2, 20 
UNION SELECT 5, 20 
UNION SELECT 4, 20 
UNION SELECT 1, 20;

CREATE TABLE portfolio.project_details (
    project_detail_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , project_id INT NOT NULL REFERENCES portfolio.projects(project_id)
    , description VARCHAR(255) NOT NULL
);