export const projectTypeDefs = `
    type Project {
        projectId: String!
        name: String!
        projectDetails: [ProjectDetail!]!
        technologies: [Technology!]!
		orderId: Int!
    }

    type Query {
        projects: [Project]!
    }
`;
