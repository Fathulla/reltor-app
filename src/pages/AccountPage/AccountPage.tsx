import React, { useContext } from "react";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import { Link } from "react-router-dom";
import { AppNavigation } from "../../components/AppNavigation/AppNavigation";
import {
  ProfileCard,
  ProfileContainer,
} from "./AccountPage.styled";
import { ThemeContext } from "../../utils/ThemeContext";

export const AccountPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    toggleTheme();
  };

  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  return (
    <>
      <AppNavigation />
      <ProfileContainer>
        <ProfileCard>
          <AppHeader headerText="Аккаунт" type="h1" />
          <p>Имя пользователя: {savedUsername}</p>
          <p>Пароль: {savedPassword}</p>
          <button onClick={handleToggleTheme}>Toggle Theme</button>
          <p>Current Theme: {theme}</p>
          <Link to={"/main"}>Home</Link>
        </ProfileCard>
      </ProfileContainer>
    </>
  );
};
