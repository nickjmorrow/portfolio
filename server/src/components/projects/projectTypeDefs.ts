export const projectTypeDefs = `
    type Project {
        projectId: String!
        name: String!
        projectDetails: [ProjectDetail!]!
        technologies: [Technology!]!
    }

    type Query {
        projects: [Project]!
    }
`;
