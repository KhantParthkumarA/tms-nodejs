import path from 'path';
import { debug } from 'console';
import fs from 'fs';
import jwt from 'jsonwebtoken';

import * as demoRequestService from '../../services/demoRequest.service';

import {
  successResponse,
  errorResponse,
} from '../../helpers';

import asyncHandler from '../../middlewares/async';

// @desc      Create demo-request
// @route     POST /api/demo-request
// @access    Private/User
export const create = asyncHandler(async (req: any, res: Response, next: any) => {
  const existingDemoReq = await demoRequestService.getDemoRequest({ clientName: req.body.clientName })
  const demoRequest = await demoRequestService.createDemoRequest({ ...req.body });

  if (!demoRequest._id) {
    return errorResponse(req, res, 'Failed to create demo request, Please try again', 400);
  }
  return successResponse(req, res, 'otp sent');
});
