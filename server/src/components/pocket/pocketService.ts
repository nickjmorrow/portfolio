import axios from "axios";
import { logger } from "../../infrastructure/logger";
import { pocketApi } from "./pocketApi";

export const pocketService = {
	getAccessToken: async (requestToken: string) => {
		try {
			const { data } = await axios.post(pocketApi.authorize, {
				consumer_key: process.env.CONSUMER_KEY,
				code: requestToken
			});
			const equalsIndex = data.indexOf("=");
			const afterEquals = data.slice(equalsIndex + 1, data.length);
			const ampersandIndex = afterEquals.indexOf("&");
			return afterEquals.slice(0, ampersandIndex);
		} catch (error) {
			logger.error(error.data);
		}
	},
	getRequestToken: async () => {
		const { data: requestToken } = await axios.post<string>(
			pocketApi.request,
			{
				consumer_key: process.env.CONSUMER_KEY,
				redirect_uri: process.env.BASE_URL
			}
		);

		const equalsIndex = requestToken.indexOf("=");
		return requestToken.slice(equalsIndex + 1, requestToken.length);
	},
	addToPocket: async (pocketEntry: IPocketEntry): Promise<any> => {
		const { url, pocketAccessToken: accessToken } = pocketEntry;
		try {
			await axios.post(pocketApi.add, {
				url,
				access_token: accessToken,
				consumer_key: process.env.CONSUMER_KEY
			});
			logger.info("Added to Pocket");
		} catch (error) {
			if (error.response.status === StatusCode.Unauthorized) {
				// TODO: think about error handling across APIs
				logger.error("unauthorized");
				return "Unauthorized";
			}
			logger.error(error.response.status);
		}
	}
};

enum StatusCode {
	Unauthorized = 401
}

export interface IPocketEntry {
	url: string;
	pocketAccessToken: string;
}
