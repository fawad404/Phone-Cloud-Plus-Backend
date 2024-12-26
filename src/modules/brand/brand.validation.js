import Joi from "joi";


const addBrandValidation = Joi.object({
  name: Joi.string().required().trim(),
  slug: Joi.string().optional().trim(), // Allow the slug (server-generated)
  logo: Joi.string().optional().uri(), // Allow the logo (optional and must be a valid URL)
});


const updateBrandValidation = Joi.object({
  name: Joi.string().required().trim(),
  id: Joi.string().hex().length(24).required(),
});

const deleteBrandValidation = Joi.object({
  id: Joi.string().hex().length(24).required(),
});

export { addBrandValidation, updateBrandValidation, deleteBrandValidation };
