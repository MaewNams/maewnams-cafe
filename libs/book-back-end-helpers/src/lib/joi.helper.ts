import * as Joi from '@hapi/joi';

export function validate<T>(validateObject, data: T): T {
  const schema = Joi.object().keys(validateObject);
  return validateFunction(schema, data);
}

export function validateArray<T>(validateObject, data: T): T {
  const schema = Joi.array().items(Joi.object().keys(validateObject));
  return validateFunction(schema, data);
}

function validateFunction(schema, data) {
  data = JSON.parse(JSON.stringify(data));
  const v = schema.validate(data, {
    stripUnknown: true
  });
  if (v.error) {
    console.log(data);
    throw new Error(v.error.message);
  }
  return v.value;
}
