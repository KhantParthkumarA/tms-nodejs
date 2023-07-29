import mongoose, { Schema, Document, Model, Types, ObjectId } from 'mongoose';

interface IDemoRequest extends Document {
  clientName: string;
  companyDetails: string;
  contactDetails: string;
  userId: ObjectId;
}

interface ICreateDemoRequest extends Document {
  clientName: string;
  companyDetails: string;
  contactDetails: string;
  userId: ObjectId;
}

const demoRequestSchema = new Schema<IDemoRequest>(
  {
    clientName: {
      type: String,
      required: true,
    },
    companyDetails: {
      type: String,
      required: true,
    },
    contactDetails: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'Users'
    }
  },
  {
    timestamps: true,
  }
);

// Define the demo request model
const DemoRequestModel: Model<IDemoRequest> = mongoose.model<IDemoRequest>(
  'DemoRequest', demoRequestSchema
);

export { DemoRequestModel, ICreateDemoRequest };