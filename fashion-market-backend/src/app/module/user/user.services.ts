import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUsersToDb = async (user: IUser): Promise<IUser> => {
  try {
    const createUser = await User.create(user);
    if (!createUser) {
      throw new Error("User Creation Failed");
    }
    return createUser;
  } catch (error) {
    console.log(error);
  }
};

const getUserFromDb = async () => {
  try {
    const result = await User.find({});
    console.log(result);
    return result;
  } catch (err) {}
};

const updateUserProfileInDb = async (query: any) => {
  const { _id, body } = query;

  console.log(_id, body, "db");
 try {
   const updatedDoc = {
     $set: {
       displayName: body.displayName,
       userImg: body.photoURL,
     },
   };
   const result = await User.updateOne({ _id }, updatedDoc);
   console.log(result);
   return result;
 } catch (error) {
  console.log(error)
 }
};
export const userService = {
  createUsersToDb,
  getUserFromDb,
  updateUserProfileInDb,
};
