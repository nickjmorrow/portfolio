import { getConnection } from "typeorm";
import { User } from "./models/User";

export const userResolver = {
	Query: {
		users(_: any, args: any, ctx: any) {
			const usersQuery = ``;
			return getUsers();
		}
	}
};

const getUsers = async () => {
	const manager = await getConnection().manager;
	return await manager.find(User);
};
