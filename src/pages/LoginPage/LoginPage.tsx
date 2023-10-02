import React from "react";
import "./LoginPage.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { ILoginPage } from "./LoginPageInterface";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginPage>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ILoginPage> = (data) => {
    alert(`Your login ${data.username}`);
    reset();
  };

  return (
    <div className="loginPage">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username", {
            required: "Login is required",
          })}
          type="text"
          placeholder="Login"
        />
        {errors?.username && (
          <div style={{ color: "red" }}>{errors.username.message}</div>
        )}

        <input
          {...register("password", {
            required: "Password is required",
          })}
          type="text"
          placeholder="Password"
        />
        {errors?.password && (
          <div style={{ color: "red" }}>{errors.password.message}</div>
        )}

        <button>Submit</button>
      </form>
    </div>
  );
};
