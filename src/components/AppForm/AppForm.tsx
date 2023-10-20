import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

interface ILoginForm {
  username: string;
  password: string;
}

export const AppForm = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    if (data.username === "Fathu" && data.password === "password") {
      history.push("/main");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("username", {
          required: "Login is required",
        })}
        type="text"
        placeholder="Login"
      />
      {errors.username && (
        <div style={{ color: "red" }}>{errors.username.message}</div>
      )}

      <input
        {...register("password", {
          required: "Password is required",
        })}
        type="password"
        placeholder="Password"
      />
      {errors.password && (
        <div style={{ color: "red" }}>{errors.password.message}</div>
      )}

      <button type="submit">Submit</button>
      <Link to="/main">Go to Main Page</Link>
    </form>
  );
};
