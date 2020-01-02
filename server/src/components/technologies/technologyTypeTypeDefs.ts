export const technologyTypeTypeDefs = `
	type TechnologyType {
		technologyTypeId: Int!
		name: String!
		orderId: Int!
	}

	type Query {
		technologyTypes: [TechnologyType]!
	}
`;
