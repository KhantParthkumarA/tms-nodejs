import dotenv from 'dotenv';

dotenv.config();

export const successResponse = (req: Request, res: any, data: any, code = 200) => res.send({
  code,
  data,
  success: true,
});

export const errorResponse = (
  req: Request,
  res: any,
  errorMessage = 'Something went wrong',
  code = 500,
  error = {},
) => {
  res.status(500).json({
    code,
    errorMessage,
    error,
    data: null,
    success: false,
  });
}
