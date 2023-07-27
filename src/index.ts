import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import listEndpoints from 'express-list-endpoints';
import cookieParser from 'cookie-parser';
import passport from "passport";
import Yaml from "yamljs";
import swaggerUiExpress from "swagger-ui-express";
import { join } from "path";

import authRouter from './routes/authRoute.ts';
import { badRequestHandler, unauthorizedHandler, notFoundHandler, internalServerErrorHandler } from "./errorHandlers.ts";
import { connectDB } from "./config/db.config.ts";

dotenv.config({ path: './config/config.env' });


const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
const app: Application = express();

// Connect to database
connectDB();

// Load swagger docs
// const swaggerJsDocs: any = Yaml.load(join(process.cwd(), "./src/docs/swagger.yml"));

// Middlewares
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser()) 

// Routes
app.use('/api/v1/auth', authRouter);
// app.use('/api/v1/users', usersRouter);

// Error handlers
app.use(badRequestHandler)
app.use(unauthorizedHandler)
app.use(notFoundHandler)
app.use(internalServerErrorHandler)

// Start server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  console.table(listEndpoints(app));
});