BEGIN;

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
    , company_url VARCHAR NOT NULL
);

INSERT INTO portfolio.experiences (experience_id, name, start_date, end_date, role_name, location, company_url)
OVERRIDING SYSTEM VALUE 
SELECT 1, 'Mastercard', CAST('2017-07-01' AS DATE), CAST('2020-01-03' AS DATE), 'Software Quality Engineer', 'New York, NY', 'https://www.mastercard.com' 
UNION SELECT 2, 'BWX Technologies', '2016-05-01', CAST('2016-08-01' AS DATE), 'Engineering Intern', 'Johnson City, TN', 'http://www.nuclearfuelservices.com' 
UNION SELECT 3, 'UVA Process Modelling', '2015-12-01', '2017-03-01', 'Teaching Assistant', 'Charlottesville, VA', 'https://engineering.virginia.edu/departments/chemical-engineering'
UNION SELECT 4, 'Fora Financial', CAST('2020-01-06' AS DATE), NULL, 'Software Engineer', 'New York, NY', 'https://www.forafinancial.com/';

CREATE TABLE portfolio.experience_details (
    experience_detail_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , experience_id INT NOT NULL REFERENCES portfolio.experiences(experience_id)
    , description VARCHAR NOT NULL
);

INSERT INTO portfolio.experience_details (experience_id, description)
SELECT 1, 'Worked in a team of 7 on a React, .NET application for optimizing instance setup and automating data model configuration for clients of the MasterCard analytic engine, enabling scalability by reducing instance setup time by 70%. Focused on unit testing and rollout simulation in a testing environment.' 
UNION SELECT 1, 'Implemented integration testing of .NET analytics API and inclusion in Jenkins CI pipeline, preventing unexpected regressions from reaching production and improving deployment efficiency by 30%.' 
UNION SELECT 1, 'Worked in a team of 8 to design, implement, and test a .NET application that would provide analytic insights using the MasterCard transaction log persisted in SQL Server and enable banks to make data-driven decisions. Focused on automated testing of data source features and data model configurations.' 
UNION SELECT 1, 'Designed and implemented user interface testing infrastructure in C# Selenium for React application, reducing production defects and increasing Jenkins deployment efficiency.' 
UNION SELECT 1, 'Implemented database setting management component in C# and React to enable delivery team to change product behavior for any instance without reliance on the engineering team, improving product scalability.' 
UNION SELECT 2, 'Designed chemical tank transfer system using AutoCAD to be used during plant operations involving a streamlined and reliable transfer of blended low-enriched Uranium.' 
UNION SELECT 3, 'I absolutely loved solving chemical engineering problems using a little bit of MATLAB magic. Cracking the puzzle, coding it up, and seeing some beautiful 2D diffusion gradient for some chemical process was cool enough to make me want to be a teaching assistant. Getting others to that "Aha!" moment made it such a fun time.'
UNION SELECT 4, 'Designed and implemented features for a C# / .NET transaction recording application to enable and automate lending processes throughout the company. Focused on SQL Server query performance, deal lifecycle, and microservice migration.'
UNION SELECT 4, 'Developed features for an online merchant application software (.NET Core) to streamline the process of small businesses applying for credit advances.'
UNION SELECT 4, 'Created build and deploy pipelines with integration between Azure, Octopus Deploy, and TeamCity with Git version control, improving developer and QA efficiency.';

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
    , is_front_page BOOLEAN NOT NULL
);

INSERT INTO portfolio.technologies (technology_id, name, skill_level_id, technology_type_id, order_id, is_front_page)
OVERRIDING SYSTEM VALUE 
SELECT 1, 'C#', 1, 1, 2, true
UNION SELECT 2, 'TypeScript', 1, 1, 1, true
UNION SELECT 3, 'JavaScript', 1, 1, 3, true
UNION SELECT 4, 'Node.js', 2, 1, 4, true 
UNION SELECT 5, 'Go', 2, 1, 5, false
UNION SELECT 6, 'Python', 2, 1, 4, false 
UNION SELECT 7, 'React', 1, 2, 1, true
UNION SELECT 8, 'Redux', 1, 2, 2, false
UNION SELECT 9, 'Styled Components', 1, 2, 3, false
UNION SELECT 10, '.NET Core', 2, 2, 4, false
UNION SELECT 11, 'SQL Server', 1, 3, 1, false
UNION SELECT 12, 'PostgreSQL', 2, 3, 3, true
UNION SELECT 13, 'MongoDB', 2, 3, 2, false
UNION SELECT 14, 'Git', 1, 4, 1, false
UNION SELECT 15, 'Jenkins CI', 2, 4, 2, false
UNION SELECT 16, 'Gatsby', 2, 2, 5, false
UNION SELECT 17, 'Webpack', 2, 4, 4, false
UNION SELECT 18, 'Rollup', 2, 4, 3, false
UNION SELECT 19, 'Selenium', 1, 5, 1, false
UNION SELECT 20, 'Jest', 2, 5, 2, false
UNION SELECT 21, 'HTML & CSS', 1, 1, 1, true; 

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
    , file_name VARCHAR NOT NULL
    , order_id INT NOT NULL
    , date_deleted DATE NULL
);

INSERT INTO portfolio.projects (project_id, name, tagline, github_link, site_link, file_name, order_id, date_deleted)
OVERRIDING SYSTEM VALUE 
SELECT 1, 'Geoclustering', 'Cluster locations in popular cities and view optimal paths between them for better sight-seeing.', 'https://github.com/nickjmorrow/maps-clustering', 'https://nickjmorrow.github.io/maps-clustering', 'map_clustering.png', 1, CAST(NULL AS DATE)
UNION SELECT 2, 'Weird Weather', 'Analyze weather extrema across various lookback periods to surface trends across time and region.', 'https://github.com/nickjmorrow/weird-weather', 'https://nickjmorrow.github.io/weird-weather', 'weird_weather.png', 8, CAST(NULL AS DATE)
UNION SELECT 3, 'Component Library', 'Define design-decisions up-front with a component library while leaving space for one-off departures.', 'https://github.com/nickjmorrow/react-component-library', 'https://nickjmorrow.github.io/react-component-library', 'react_component_library.png', 3, CAST(NULL AS DATE) 
UNION SELECT 4, 'TV Show Information Aggregator', 'Check out various analytics for a TV show before watching it.', 'https://github.com/nickjmorrow/first-few', 'https://nickjmorrow.github.io/first-few', 'first_few.png', 4, CAST(NULL AS DATE) 
UNION SELECT 5, 'Subreddit Subscription Automated Job', 'Automically import top posts from selected subreddits into your Pocket account.', 'https://github.com/nickjmorrow/subreddit-subscriber', NULL, 'subreddit_subscriber.png', 5, CAST(NULL AS DATE)
UNION SELECT 6, 'Professional Portfolio v1', 'Portfolio to showcase experiences, projects, and technologies.', 'https://github.com/nickjmorrow/portfolio', 'https://nickjmorrow.com/', 'portfolio.png', 6, CAST(NULL AS DATE) 
UNION SELECT 7, 'Blogging Platform', 'Personal blog to jot down thoughts on technology, software, and general development.', 'https://github.com/nickjmorrow/blog', NULL, 'blog.png', 7, CAST(NULL AS DATE) 
UNION SELECT 8, 'Chore Scheduler', 'Predictably schedule chores for the NY Mastercard WeWork office.', 'https://github.com/nickjmorrow/wework-scheduler', 'https://chorescheduler.netlify.com/', 'wework_scheduler.png', 2, CAST(NULL AS DATE)
UNION SELECT 9, 'Breakbuilder', 'Plan out yearly vacation and view related seasonal analytics.', 'https://github.com/nickjmorrow/breakbuilder', 'https://breakbuilder.netlify.com/', 'breakbuilder.png', 9, CAST(NULL AS DATE)
UNION SELECT 10, 'Ventr', 'TODO2', 'https://github.com/nickjmorrow/ventr', NULL, 'ventr.png', 10, CAST('2020-04-18' AS DATE)
UNION SELECT 11, 'COSDNA Clone', 'TODO3', 'https://github.com/nickjmorrow/cosdnaclone', NULL, 'cosdnaclone.png', 11, CAST('2020-04-18' AS DATE)
UNION SELECT 12, 'Places to Live', 'Rank places to live by useful metrics like population and job prospects.', 'https://github.com/nickjmorrow/placestolive', 'https://wheretolive.netlify.com/', 'placestolive.png', 12, CAST(NULL AS DATE)
UNION SELECT 13, 'Forsvarkten Clone', 'TODO5', 'https://github.com/nickjmorrow/forsvarktenclone', NULL, 'forsvarktenclone.png', 13, CAST('2020-04-18' AS DATE);

UPDATE portfolio.projects
SET date_deleted = CURRENT_DATE
WHERE project_id IN (
    2, 5, 13
);

CREATE TABLE portfolio."Project_Project__technologies" (
    "projectsProjectId" INT NOT NULL REFERENCES portfolio.projects(project_id)
    , "technologiesTechnologyId" INT NOT NULL REFERENCES portfolio.technologies(technology_id)
);

INSERT INTO portfolio."Project_Project__technologies" ("projectsProjectId", "technologiesTechnologyId")
SELECT 1, 1 -- Geoclustering, C#
UNION SELECT 1, 2 -- Geoclustering, TypeScript
UNION SELECT 1, 7 -- Geoclustering, React
UNION SELECT 1, 8 -- Geoclustering, Redux
UNION SELECT 1, 9 -- Geoclustering, Styled Components
UNION SELECT 1, 10 -- Geoclustering, .NET Core
UNION SELECT 1, 11 -- Geoclustering, SQL Server
UNION SELECT 1, 17 -- Geoclustering, Webpack
UNION SELECT 2, 1 -- Weird Weather, C#
UNION SELECT 2, 2 -- Weird Weather, TypeScript
UNION SELECT 2, 7 -- Weird Weather, React
UNION SELECT 2, 10 -- Weird Weather, .NET Core
UNION SELECT 2, 11 -- Weird Weather, SQL Server
UNION SELECT 2, 17 -- Weird Weather, Webpack
UNION SELECT 3, 2 -- Component Library, TypeScript
UNION SELECT 3, 7 -- Component Library, React
UNION SELECT 3, 9 -- Component Library, Styled Components
UNION SELECT 3, 17 -- Component Library, Webpack
UNION SELECT 3, 20 -- Component Library, Jest
UNION SELECT 4, 2 -- TV Show Information Aggregator, TypeScript
UNION SELECT 4, 4 -- TV Show Information Aggregator, Node.js
UNION SELECT 4, 7 -- TV Show Information Aggregator, React
UNION SELECT 4, 13 -- TV Show Information Aggregator, MongoDB
UNION SELECT 5, 2 -- Subreddit Subscription Automated Job, TypeScript
UNION SELECT 5, 4 -- Subreddit Subscription Automated Job, Node.js
UNION SELECT 5, 7 -- Subreddit Subscription Automated Job, React
UNION SELECT 5, 13 -- Subreddit Subscription Automated Job, MongoDB
UNION SELECT 6, 2 -- Professional Portfolio v1, TypeScript
UNION SELECT 6, 4 -- Professional Portfolio v1, Node.js
UNION SELECT 6, 7 -- Professional Portfolio v1, React
UNION SELECT 6, 12 -- Professional Portfolio v1, PostgreSQL
UNION SELECT 6, 16 -- Professional Portfolio v1, Gatsby
UNION SELECT 6, 9 -- Professional Portfolio v1, Styled Components
UNION SELECT 7, 2 -- Blogging Platform, TypeScript
UNION SELECT 7, 7 -- Blogging Platform, React
UNION SELECT 7, 16 -- Blogging Platform, Gatsby
UNION SELECT 8, 2 -- Chore Scheduler, TypeScript
UNION SELECT 8, 4 -- Chore Scheduler, Node.js
UNION SELECT 8, 7 -- Chore Scheduler, React
UNION SELECT 8, 12 -- Chore Scheduler, PostgreSQL
UNION SELECT 8, 16 -- Chore Scheduler, Gatsby
UNION SELECT 12, 2 -- Where to Live, TypeScript
UNION SELECT 12, 4 -- Where to Live, Node.js
UNION SELECT 12, 7 -- Where to Live, React
UNION SELECT 12, 12 -- Where to Live, PostgreSQL
UNION SELECT 12, 17 -- Where to Live, Webpack
UNION SELECT 12, 9; -- Where to Live, Styled Components

CREATE TABLE portfolio.project_details (
    project_detail_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , project_id INT NOT NULL REFERENCES portfolio.projects(project_id)
    , description VARCHAR(255) NOT NULL
);

COMMIT;

