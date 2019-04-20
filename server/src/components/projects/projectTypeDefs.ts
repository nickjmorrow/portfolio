export const projectTypeDefs = `
    type Project {
        projectId: String!
        name: String!
        projectTechnologies: [ProjectTechnology!]!
    }

    type Query {
        projects: [Project]!
    }
`;
