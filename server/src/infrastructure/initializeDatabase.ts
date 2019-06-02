export const initializeDatabase = `
	INSERT INTO portfolio.skill_levels (description)
	VALUES
		(1, 'Familiar')
		, (2, 'Proficient')
	
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
	
	INSERT INTO portfolio.experiences (name, start_date, end_date, role_name, location)
	VALUES
		('Mastercard / Applied Predictive Technologies', '2019-07-17', null, true, 'Software Quality Assurance Engineer', 'New York, NY')
		, ('Babcock Wilcox Technologies', '2018-05-21', '2018-08-16', false, 'Engineering Intern', 'Erwin, TN')
`;