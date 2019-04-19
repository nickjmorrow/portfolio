import { graphqlExpress, graphiqlExpress } from "graphql-server-express";
import express = require("express");
import middleware from "./middleware";
import errorHandlers from "./middleware/errorHandlers";
import { routes } from "./routes";
import { applyMiddleware, applyRoutes } from "./utils";
import passport from "passport";
import { useGoogleTokenStrategy } from "./passport";
import bodyParser = require("body-parser");
import { userSchema } from "../components/graphql/userSchema";
import cors = require("cors");

export const app = express();
// applyMiddleware(middleware, app);
// applyRoutes(routes, app);
// applyMiddleware(errorHandlers, app);
app.use(express.json());

// app.use(passport.initialize());
app.use("*", cors());
app.use(
	"/graphiql",
	graphiqlExpress({
		endpointURL: "/graphql"
	})
);

app.use("/", bodyParser.json(), graphqlExpress({ schema: userSchema }));
useGoogleTokenStrategy(passport);
