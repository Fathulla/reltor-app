import styled from "styled-components";

export const SCCardItem = styled.div`
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 30px;
    width: 300px;
    a{
        text-decoration: none;
        color: black;
    }
`

export const SCCardImg = styled.div`
    background-image: url(../../assets/img/card-img1.jpg);
    background-image: url(../../assets/img/card-img1.jpg);
    background-position: center;
    background-size: contain;
    border-radius: 10px;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    .cardImgTxt{
        position: absolute;
        top: 0;
        background-color: #1E61D9;
        color: white;
        padding: 5px;
        width: fit-content;
        border-radius: 0px 10px;
    }
`
export const SCCardInfo = styled.div`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .ForWhat{
        font-size: 25px;
        font-weight: bold;
    }
    .prise{
        font-size: 17px;
        font-weight: bold;
    }
    .houseInfo{
        font-size: 15px;
        font-weight: bold;
    }
    .houseLocation{
        font-size: 18px;
    }
`