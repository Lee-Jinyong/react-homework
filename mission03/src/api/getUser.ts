import usersData from "@/data/users.json";
import { UserType } from "@/types/user";

export function getUserList() {
  return usersData;
}

export function getUser(userId: number): UserType | null {
  const userList = getUserList();
  const user = userList.find((user) => user.id === userId);
  return user ? user : null;
}
