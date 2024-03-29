import React from "react";
import {
  useLoaderData,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";

import { loginUser } from "../utils/api";

export function loader({ request }) {
  const url = new URL(request.url).searchParams;

  return url.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  try {
    const data = await loginUser({ email, password });

    localStorage.setItem("loggedin", true);

    const response = redirect(pathname);
    response.body = true;
    return response;
  } catch (error) {
    return error.message;
  }
}

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });

  const message = useLoaderData();
  const error = useActionData();
  const navigation = useNavigation();

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {error && <h3 className="red">{error}</h3>}
      <Form method="post" className="login-form" replace>
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button disabled={navigation.status === "submitting"}>
          {navigation.status === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}
