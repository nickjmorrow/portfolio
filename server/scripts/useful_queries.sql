SELECT * FROM portfolio.projects order by  project_id;

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
