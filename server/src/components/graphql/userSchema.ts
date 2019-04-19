import { makeExecutableSchema } from "graphql-tools";
import { userResolver } from "./userResolver";

const userTypeDefs = `
    type User {
        userId: String!
        name: String
    }

    type Query {
        users: [User]!
    }
`;

export const userSchema = makeExecutableSchema({
	typeDefs: userTypeDefs,
	resolvers: userResolver
});
