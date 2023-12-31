"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryValidations = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required"
        }),
        imageUrl: zod_1.z.string({
            required_error: 'Image is required',
        }),
        slug: zod_1.z.string({
            required_error: 'Slug is required',
        }),
    })
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        imageUrl: zod_1.z.string().optional(),
        slug: zod_1.z.string().optional(),
    })
});
exports.CategoryValidations = {
    create,
    update
};
