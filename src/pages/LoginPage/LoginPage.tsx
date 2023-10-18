import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, FormContainer, SubmitButton } from "./LoginPage.styled";
import { Input } from "@mui/material";

type FormData = {
  username: string;
  password: string;
};

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

export const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    if (data.username === "fathulla" && data.password === "1234") {
      localStorage.setItem("username", data.username);
      localStorage.setItem("password", data.password);
      navigate("/profile");
    } else {
      alert("Неверный логин или пароль");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("username")} placeholder="Username" />
      <ErrorMessage>{errors.username?.message}</ErrorMessage>

      <Input {...register("password")} type="password" placeholder="Password" />
      <ErrorMessage>{errors.password?.message}</ErrorMessage>

      <SubmitButton type="submit" value="Submit" />
    </FormContainer>
  );
};
