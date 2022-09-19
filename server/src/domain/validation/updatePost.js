import { validate, Joi } from 'express-validation';

export const update = validate({
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    userName: Joi.string().max(45).required(),
    coment: Joi.string().max(200).required(),
  }),
});
