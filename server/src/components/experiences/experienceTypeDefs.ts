export const experienceTypeDefs = `
    type Experience {
        experienceId: Int!
        name: String!
        experienceDetails: [ExperienceDetail!]!
        technologies: [Technology!]!
		roleName: String!
		startDate: String!
		endDate: String
		location: String!
		companyUrl: String!
    }

    type Query {
        experiences: [Experience]!
    }
`;
