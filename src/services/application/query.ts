import httpUtils from "../../utils/http.utils";
import { IUser } from "../../types";

export const GET_CONTACTS = async (): Promise<IUser[]> => {
  return httpUtils.get(`/users`);
};
