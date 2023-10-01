import React from "react";
import "./LoginPage.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { ILoginPage } from "./LoginPageInterface";

export const LoginPage = () => {
  const { register, handleSubmit } = useForm<ILoginPage>();

  const onSubmit: SubmitHandler<ILoginPage> = (data) => {
    alert(`Your login ${data.login}`);
    alert(`Your password ${data.password}`);
  };

  return (
    <div className="loginPage">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...(register("login"),
          {
            required: true,
          })}
          type="text"
        />
        <input
          {...(register("password"),
          {
            required: true,
          })}
          type="number"
        />

        <button>Submit</button>
      </form>
    </div>
  );
};
