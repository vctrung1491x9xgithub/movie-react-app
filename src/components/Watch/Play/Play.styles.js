

import styled from "styled-components";

export const Iframe = styled.iframe`
    width: 100%;
    height: 600px;
    @media screen and (max-width: 960px) {
        height: 500px;
    }
    @media screen and (max-width: 768px) {
        height: 400px;
    }
    @media screen and (max-width: 500px) {
        height: 250px;
    }
    

`;
export const InfoRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;
export const InfoName = styled.h2`
    color: #FEAB1D; 
    margin-bottom: 10px;
    margin-right: 10px;
`;

export const Button = styled.a`
    color: #e5e5e5;
    text-decoration: none;    
    margin-right:  ${({ Color }) => (Color ? " " : "10px")};
    margin-left: ${({ Color }) => (Color ? " " : "auto")};
    padding: 0 5px;
    border-radius: 4px;  
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 3px rgb(255 255 255 / 50%);
    &:hover{
        box-shadow: 0px 0px 7px rgb(255 255 255 / 100%);
    }
    & > span {
        margin-left: 5px;
        color: ${({ Color }) => (Color ? Color : '#0ebac0')};
        font-size: 20px;
        font-weight: 600;
    }

    @media screen and (max-width: 768px) {
        margin-right:  ${({ Color }) => (Color ? "auto" : "10px")};  
        margin-left: 0; 
    }
    
`;

