import { $users } from "@/shared/store/user";
import { IUser } from "@/shared/types/interface";
import { redirect } from "next/navigation";

export default async function Index({ searchParams }: { searchParams: IUser }) {
  const { login, password } = await searchParams;
  const usersArray = $users.get();
  const isUser = usersArray.find(
    (user) => user.login === login && user.password === password
  );
  if (!isUser) {
    redirect("/auth");
  } else {
    redirect("/1");
  }
}
