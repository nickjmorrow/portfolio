export const projectTechnologyDefs = `
    type ProjectTechnology {
        name: String!
        project: Project!
    }

    type Query {
        projectTechnologies: [ProjectTechnology]!
    }
`;
