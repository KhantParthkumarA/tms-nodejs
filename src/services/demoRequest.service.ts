import { DemoRequestModel, ICreateDemoRequest } from '../models/DemoRequestModel';
import exceptionHandler from '../middlewares/exceptionHandler';

export const getDemoRequest = exceptionHandler(async (
  query: any,
  select = [],
) => {
  const demoRequest = await DemoRequestModel.findOne(query).select(select);
  return demoRequest;
});

export const createDemoRequest = exceptionHandler(async (payload: ICreateDemoRequest) => {
  const demoRequest = await DemoRequestModel.create(payload);
  return demoRequest;
});
