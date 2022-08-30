import { validate, Joi } from 'express-validation';

export const create = validate({
  body: Joi.object({
    id: Joi.string(),
    userName: Joi.string().max(45).required(),
    coment: Joi.string().max(200).required()
  }),
});