import { errorResponse } from '../helpers';

export default (fn: any) => (req: Request, res: Response, next: any): any => Promise
  .resolve(fn(req, res, next))
  .catch(function (error) {
    console.log("Error", error)
    return errorResponse(req, res, error.message, 500);
  });
