import styled from "styled-components";

export const LoadingContainer = styled.div`
    width: 100vw;
    height: 100vh;  
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;  
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Loading = styled.div`
    background-color: rgba(17, 17, 44, 0.9);
    border-radius: 50%;
    box-shadow: 5px 5px 5px rgba(17, 17, 44, 0.8);
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoadingImg = styled.img`
    width: 50px;
    height: 50px; 
    padding: 1px;
`;