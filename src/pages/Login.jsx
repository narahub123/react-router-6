import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { loginUser } from "../utils/api";

export async function loader({ request }) {
  const url = new URL(request.url).searchParams;
  return url.get("message");
}

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const message = useLoaderData();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    // console.log(loginFormData);
    loginUser(loginFormData)
      .then((data) => navigate("/host", { replace: true }))
      .catch((err) => setError(err))
      .finally(() => setStatus("idle"));
  }

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
      {message && <h2 className="red">{message}</h2>}
      {error && <h3 className="red">{error.message}</h3>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          value={loginFormData.password}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
