// DTO: DATA TRANSFER OBJECT
// product.schema.js valid the data from object
// valid data using joi

import joi from "joi";

// schema for the product
const productIdSchema = joi.string().uuid();

const productNameSchema = joi.string().min(3).max(80);
const productImageSchema = joi.string().uri();
const productPriceSchema = joi.number().min(1).max(1000000);

// individual schema

// setters
const createProductSchema = joi.object({
  name: productNameSchema.required(),
  price: productPriceSchema.required(),
  image: productImageSchema.required(),
});

const updateProductSchema = joi.object({
  name: productNameSchema,
  price: productPriceSchema,
  image: productImageSchema,
});

// getters
const getProductSchema = joi.object({
  id: productIdSchema.required(),
});

// note: please use the equals method to compare the values of the schemas
export { createProductSchema, updateProductSchema, getProductSchema };
