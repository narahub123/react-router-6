import { redirect } from "react-router-dom";

export async function requiredAuth() {
  let isLoggedIn = false;
  if (!isLoggedIn) {
    const response = redirect("/login");
    response.body = true;
    throw response;
  }
}
