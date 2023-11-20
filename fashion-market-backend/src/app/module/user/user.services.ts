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
  console.log(result)
  return result;
};

const updateUserProfileInDb = async (query: any) => {
  const { _id, body } = query;

  console.log(_id, body, "db");
  const updatedDoc = {
    $set: {
      displayName: body.displayName,
      userImg: body.photoURL,
    },
  };
  const result = await User.updateOne({ _id }, updatedDoc);
  console.log(result);
  return result;
};
export const userService = {
  createUsersToDb,
  getUserFromDb,
  updateUserProfileInDb,
};
