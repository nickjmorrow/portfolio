import { getConnection } from "typeorm";
import { Experience } from "./models/Experience";

export const experienceService = {
	getExperiences: async () => {
		return await getConnection().manager.find(Experience, {
			relations: ["experienceDetails", "technologies"]
		});
	}
};

const sampleExperiences = [
	{
		experienceId: 1,
		name: "experience one"
	}
];
