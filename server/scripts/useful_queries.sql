-- view info about project <-> technology mappings
SELECT
    p.project_id
    , p.name
    , t.technology_id
    , t.name
FROM portfolio.projects p
JOIN portfolio."Project_Project__technologies" pt
    ON pt."projectsProjectId" = p.project_id
JOIN portfolio.technologies t
    ON t.technology_id = pt."technologiesTechnologyId"
ORDER BY t.technology_id, p.project_id;

-- get sql from the project <-> technology mapping table
SELECT 
    CONCAT('UNION SELECT ', pt."projectsProjectId" || ', ' || pt."technologiesTechnologyId", ' -- ' || p.name || ', ' || t.name) AS result
FROM portfolio."Project_Project__technologies" pt
JOIN portfolio.projects p
    ON p.project_id = pt."projectsProjectId"
JOIN portfolio.technologies t
    ON t.technology_id = pt."technologiesTechnologyId"
ORDER BY p.project_id, t.technology_id