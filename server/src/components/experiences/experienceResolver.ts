import { experienceDetailService } from "./experienceDetailService";

export const experienceResolver = {
	Query: {
		experiences(_: any, args: any, ctx: any) {
			return [
				{
					experienceId: 1,
					name: "experience one"
				}
			];
		}
	},
	Experience: {
		experienceDetails(parent: any, args: any, ctx: any, info: any) {
			return experienceDetailService
				.getExperienceDetails()
				.filter(pt => pt.experienceId === parent.experienceId);
		}
	}
};
