import express from 'express';

import { create } from '../controllers/demoRequest/demoRequest.controller';
import { createDemoRequest } from '../controllers/demoRequest/demoRequest.validator';
import validator from '../middlewares/validator';
// import AuthMiddleware from '../middlewares/AuthMiddleware';


const authRouter = express.Router();

// authRouter.post('/demo-request', AuthMiddleware, create);
authRouter.post('/demo-request', validator(createDemoRequest, 'body'), create as any);

export default authRouter;