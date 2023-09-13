import { Model, Schema, model } from "mongoose";
import { IUser } from "./user.interface";

type UserModel = Model<IUser, {}>;

const userSchema = new Schema<IUser, UserModel>({
  displayName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  userImg: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

export const User = model<IUser, UserModel>("user", userSchema);
