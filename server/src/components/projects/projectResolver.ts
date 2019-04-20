export const projectResolver = {
	Query: {
		projects(_: any, args: any, ctx: any) {
			return [
				{
					projectId: 1,
					name: "project one"
				}
			];
		}
	},
	Project: {
		projectTechnologies(parent: any, args: any, ctx: any, info: any) {
			return [
				{
					projectId: 1,
					name: "project technology one"
				}
			].filter(pt => pt.projectId === parent.projectId);
		}
	}
};
