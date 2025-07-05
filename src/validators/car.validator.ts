import Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string()
        .pattern(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄҐґ]{1,20}$/)
        .required()
        .messages({
            "string.pattern.base": "Brand must be 1–20 letters (Latin or Cyrillic).",
            "string.empty": "Brand is required.",
        }),
    price: Joi.number().min(0).max(1000000).required().messages({
        "number.base": "Price must be a number.",
        "number.min": "Price must be at least 0.",
        "number.max": "Price must not exceed 1,000,000.",
        "any.required": "Price is required.",
    }),
    year: Joi.number().min(1990).max(2024).required().messages({
        "number.base": "Year must be a number.",
        "number.min": "Year must be no earlier than 1990.",
        "number.max": "Year must be no later than 2024.",
        "any.required": "Year is required.",
    }),
});