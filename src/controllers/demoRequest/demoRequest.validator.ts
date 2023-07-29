const Joi = require('joi');

export const createDemoRequest = {
  body: {
    clientName: Joi.string().required(),
    companyDetails: Joi.string().required(),
    contactDetails: Joi.string().required()
  },
};
