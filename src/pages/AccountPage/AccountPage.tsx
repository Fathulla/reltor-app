import React, { useContext, useState } from "react";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import Switch from "react-switch";
import { Link } from "react-router-dom";
import { AppNavigation } from "../../components/AppNavigation/AppNavigation";
import {
  ProfileCard,
  ProfileContainer,
  /* darkTheme,
  lightTheme, */
} from "./AccountPage.styled";
import { ThemeContext, Theme } from "../../utils/ThemeContext";

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
          {/* <Switch
            onChange={handleToggleTheme}
            checked={theme === darkTheme}
            onColor="#888888"
            offColor="#dddddd"
            checkedIcon={false}
            uncheckedIcon={false}
          /> */}
          <Link to={"/"}>Home</Link>
        </ProfileCard>
      </ProfileContainer>
    </>
  );
};
