import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import Switch from "react-switch";
import { Link } from "react-router-dom";
import { AppNavigation } from "../../components/AppNavigation/AppNavigation";

const lightTheme = {
  background: "#f5f5f5",
  text: "#000000",
};

const darkTheme = {
  background: "#333333",
  text: "#ffffff",
};

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ProfileCard = styled.div`
  padding: 5rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`;

export const AccountPage = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  return (
    <ThemeProvider theme={theme}>
      <AppNavigation/>
      <ProfileContainer>
        <ProfileCard>
          <AppHeader headerText="Аккаунт" type="h1" />
          <p>Имя пользователя: {savedUsername}</p>
          <p>Пароль: {savedPassword}</p>
          <Switch
            onChange={toggleTheme}
            checked={theme === darkTheme}
            onColor="#888888"
            offColor="#dddddd"
            checkedIcon={false}
            uncheckedIcon={false}
          />
          <Link to={'main'}>Home</Link>
        </ProfileCard>
      </ProfileContainer>
    </ThemeProvider>
  );
};
