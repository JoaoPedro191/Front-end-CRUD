import { useContext } from "react";
import { usersContext } from "../contexts/UsersContext";

const useUsers = () => {
  return useContext(usersContext);
};
export { useUsers };
