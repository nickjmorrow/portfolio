import { Request, Response } from "express";
import { pocketService } from "./pocketService";
import { IRoute } from "../../infrastructure/types";

export const pocketRoutes: IRoute[] = [
	{
		path: "/requesttoken",
		method: "get",
		handler: async (req: Request, res: Response) => {
			const requestToken = await pocketService.getRequestToken();
			res.json(requestToken);
		}
	},
	{
		path: "/accesstoken",
		method: "get",
		handler: async (req: Request, res: Response) => {
			const {
				query: { requestToken }
			} = req;
			const accessToken = await pocketService.getAccessToken(
				requestToken
			);
			res.json(accessToken);
		}
	}
];
