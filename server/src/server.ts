import "dotenv/config";
import express, { Express } from "express";
import compression from "compression";
import { connect } from "mongoose";
import { json, urlencoded } from "body-parser";

import gymRoutes from "./gymRoutes";

const app: Express = express();

app.use(urlencoded({ extended: false }));
app.use(json());
app.use(compression());

app.use("/api", gymRoutes);

connect(process.env.MONGODB_URI!)
	.then(() => app.listen(process.env.PORT))
	.catch((err: Error) => console.error(err));
