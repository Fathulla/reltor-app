import styled from "styled-components";

export const lightTheme = {
    background: "#f5f5f5",
    text: "#000000",
};

export const darkTheme = {
    background: "#333333",
    text: "#ffffff",
};

export const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;

export const ProfileCard = styled.div`
    padding: 5rem;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  `;