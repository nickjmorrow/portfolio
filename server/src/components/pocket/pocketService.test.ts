import { pocketService, IPocketEntry } from "./pocketService";
require("dotenv").config();

test.skip("add to pocket", async () => {
	const pocketEntry: IPocketEntry = {
		url: "http:pocket.co/sdsfsdfKga",
		pocketAccessToken: process.env.ACCESS_TOKEN!
	};
	const { status } = await pocketService.addToPocket(pocketEntry);
	expect(status).toBe(1);
});
