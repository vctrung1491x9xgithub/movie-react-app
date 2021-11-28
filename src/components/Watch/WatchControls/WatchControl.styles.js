 
import styled from "styled-components";

export const WatchControl = styled.div`
    width: 100%;
    height: 100%;
    display: flex; 
    flex-direction: column; 
    padding-right: 20px;
    @media screen and (max-width: 960px) {
        padding-right: 0px;
    }
    
`;


export const Button = styled.a` 
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    justify-content: center;
    text-transform: uppercase;
    text-decoration: none;
    border: 1.5px solid  ${({ color }) => color};
    color:  ${({ color }) => (color ? color : '#0bc6c0')};
    padding: 5px 20px 8px;
    margin: 20px 0;
    border-radius: 4px;
    font-weight: 600;
    &:hover {
        box-shadow: 0 0 7px ${({ color }) => color};
        text-shadow: 0 0 2px ${({ color }) => color};
    }
`;