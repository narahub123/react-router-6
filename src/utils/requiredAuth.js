import { redirect } from "react-router-dom";

export async function requiredAuth(request) {
  let isLoggedIn = localStorage.getItem("loggedin");

  const pathname = new URL(request.url).pathname;

  // console.log(isLoggedIn);
  if (!isLoggedIn) {
    const response = redirect(
      `/login?message=You must log in first.&redirectTo=${pathname}`
    );
    response.body = true;
    throw response;
  }
  return null;
}
