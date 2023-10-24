import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import "./GlassLoginForm.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppModal } from "../AppModal/AppModal";

interface FormData {
  username: string;
  password: string;
}

const FormSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

export const GlassLoginForm = () => {
  const [modalActive, setModalActive] = useState(false);

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(FormSchema),
  });

  const onSubmit = (data: FormData) => {
    if (data.username === "fathulla" && data.password === "1234") {
      localStorage.setItem("username", data.username);
      localStorage.setItem("password", data.password);
      navigate("/main");
    } else {
      setModalActive(true);
    }
  };
  return (
    <div className="container">
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>
            <div className="inputbox">
              <IonIcon name="person-circle-outline"></IonIcon>
              <input type="username" required {...register("username")} />
              <label htmlFor="">Username</label>
            </div>
            <div className="inputbox">
              <IonIcon name="lock-closed-outline"></IonIcon>
              <input type="password" required {...register("password")} />
              <label htmlFor="">Password</label>
            </div>
            {/* <Link to={'/main'}></Link> */}
            <button type="submit" value="Submit">
              Log in
            </button>
            <div className="bottom">
              <div className="left">
                <input type="checkbox" id="check" />
                <label htmlFor="check">Remember Me</label>
              </div>
              <div className="right">
                <label>
                  <Link to={"#"}>Forgot Password?</Link>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <AppModal
        active={modalActive}
        setActive={setModalActive}
        modalText="Неверный логин или пароль!"
      />
    </div>
  );
};
