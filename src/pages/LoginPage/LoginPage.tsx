import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

type FormData = {
  username: string;
  password: string;
};

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const SubmitButton = styled.input`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

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
      navigate("/next-page");
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
