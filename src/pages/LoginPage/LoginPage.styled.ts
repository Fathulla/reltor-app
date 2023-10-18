import styled from "styled-components";

export const FormContainer = styled.form`
  margin:  10% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 5rem 1rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  width: 30%;
`;

export const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const SubmitButton = styled.input`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;