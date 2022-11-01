import { ApiError } from "./../../exceptions/apiError";
import { User } from "../../models/user";

export const GetMeService = async (id: string) => {
  const userData = await User.findById(id);

  if (!userData) {
    throw ApiError.UnauthorizedError();
  }

  return userData;
};
