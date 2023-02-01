const zod = require("zod");
const productSchemaValidation = zod.object({
    body: zod.object({
        name: zod.string().min(3).max(20),
        price: zod.number().positive()
    }).strict
})