import { experienceResolver } from "../experiences/experienceResolver";
import { projectResolver } from "../projects/projectResolver";
import { settingResolver } from "../settings/settingResolver";
import { technologyResolver } from "../technologies/technologyResolver";

export const resolvers = [
	projectResolver,
	experienceResolver,
	technologyResolver,
	settingResolver
];
