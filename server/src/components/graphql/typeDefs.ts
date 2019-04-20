import { mergeTypes } from "merge-graphql-schemas";
import { projectTypeDefs } from "../projects/projectTypeDefs";
import { projectTechnologyDefs } from "../projects/projectTechnologyTypeDefs";
import { experienceTypeDefs } from "../experiences/experienceTypeDefs";
import { experienceDetailTypeDefs } from "../experiences/experienceDetailTypeDefs";

export const typeDefs = mergeTypes([
	projectTypeDefs,
	projectTechnologyDefs,
	experienceTypeDefs,
	experienceDetailTypeDefs
]);
