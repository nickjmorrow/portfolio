import { graphqlExpress, graphiqlExpress } from "graphql-server-express";
import express = require("express");
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import { routes } from "./routes";
import { applyMiddleware, applyRoutes } from "./utils";
import passport from "passport";
import { useGoogleTokenStrategy } from "./passport";
import bodyParser = require("body-parser");
import { mergedSchema } from "../components/graphql/mergedSchema";
import cors = require("cors");

export const app = express();
applyMiddleware(middleware, app);
applyRoutes(routes, app);

app.use(express.json());

app.use("*", cors());
app.use(
	"/graphiql",
	graphiqlExpress({
		endpointURL: "/graphql"
	})
);

// TODO: look into merging schemas

app.use("/", bodyParser.json(), graphqlExpress({ schema: mergedSchema }));
useGoogleTokenStrategy(passport);
applyMiddleware(errorHandlers, app);
