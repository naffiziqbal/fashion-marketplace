import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUsersToDb = async (user: IUser): Promise<IUser> => {
  const createUser = await User.create(user);
  if (!createUser) {
    throw new Error("User Creation Failed");
  }
  return createUser;
};

const getUserFromDb = async () => {
  const result = await User.find({});
  return result;
};

export const userService = { createUsersToDb, getUserFromDb };
