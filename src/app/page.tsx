import { $users } from "@/shared/store/user";
import { IUser } from "@/shared/types/interface";
import { Params } from "next/dist/server/request/params";
import { redirect } from "next/navigation";

export default async function Index({
  searchParams,
}: {
  searchParams: Params;
}) {
  const { login, password } = await searchParams;

  if (!login || !password) {
    redirect("/auth");
    return;
  }

  const usersArray = $users.get();

  const authResponse = await fetch("http://localhost:3000/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ login, password }),
  });

  // Проверка ответа от сервера
  if (!authResponse.ok) {
    console.error("Ошибка аутентификации:", await authResponse.text());
    redirect("/auth");
  }

  const authData = await authResponse.json();
  console.log(authData);

  const isUser = usersArray.find(
    (user) =>
      user.login === login &&
      user.password === password &&
      authData.login === user.login &&
      authData.password === user.password
  );

  if (!isUser) {
    redirect("/auth");
  } else {
    redirect("/1");
  }
}
