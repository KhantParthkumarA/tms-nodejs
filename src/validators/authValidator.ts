import Joi, { StringSchema } from "joi";

interface LoginBody {
    email: StringSchema;
    password: StringSchema;
}

interface RegisterBody {
    name: StringSchema;
    surname?: StringSchema;
    email: StringSchema;
    password?: StringSchema;
    role?: StringSchema;
    position?: StringSchema;
    department?: StringSchema;
}

const authValidator = {
    login: {
        body: Joi.object<LoginBody>({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        }),
    },
    register: {
        body: Joi.object<RegisterBody>({
            name: Joi.string().required(),
            surname: Joi.string().optional(),
            email: Joi.string().email().required(),
            password: Joi.string().optional(),
            role: Joi.string().valid('user', 'admin', 'superadmin').optional(),
            position: Joi.string().optional(),
            department: Joi.string().optional(),
        }),
    },
};

export default authValidator;