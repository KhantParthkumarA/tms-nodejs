import Joi from "joi";
import mongoose from "mongoose";
import "dotenv/config";

const validateConfig = () => {
  const envVarsSchema = Joi.object()
    .keys({
      NODE_ENV: Joi.string()
        .valid("production", "development", "test")
        .required(),
      PORT: Joi.number().default(3000),
      MONGO_URI: Joi.string().required().description("Mongo DB url"),
    })
    .unknown();

  const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: "key" } })
    .validate(process.env);

  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }

  return {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    mongoose: {
      url: envVars.MONGO_URI + (envVars.NODE_ENV === "test" ? "-test" : ""),
    },
  };
};

export const connectDB = async () => {
  try {
    const config = validateConfig();
    await mongoose.connect(config.mongoose.url);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
    process.exit(1); // Exit the process in case of connection failure
  }
};