import styled from "styled-components";

export const SCSubHeader = styled.div`
  height: 87vh;
  color: white;
  background-image: url("https://media.istockphoto.com/id/155370592/photo/double-fronted-house-at-dusk.jpg?s=612x612&w=0&k=20&c=SwzP0IJdXWzyrxAY7CwT4EnGe4CiAOq52tl5q-PGBoo=");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  nav {
    display: flex;
    gap: 20px;
  }
  .navItem {
    padding-bottom: 10px;
    transition: 300ms;
    font-size: 15px;
  }
  .navItem:hover {
    border-bottom: 2px solid black;
    /* font-size: 20px; */
    transition: 300ms;
    scale: 1.5;
  }
  .navItem:active {
    border-bottom: 2px solid red;
  }
  a {
    text-decoration: none;
    color: black;
  }
  nav a {
    color: white;
  }
  .autocomplete-item {
    width: 40vw;
    background-color: white;
  }
`;
