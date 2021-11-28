
import styled, { css } from "styled-components";

export const AvatarContainer = styled.div` 
    width: 100%;
    display: block; 
`;
export const Poster = styled.img`
    display: block;
    width: 100%;
    max-width: 370px;
    max-height: 500px;
    box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.7);
    @media screen and (max-width: 960px) {
        margin: auto; 
    }
    
`;
export const PosterItemContainer = styled.ul`
    display: flex; 
    margin-top: 20px; 
    width:300px; 
    overflow: auto; 
    list-style: none;
    padding: 5px 5px 10px;   
     /* width */
    ::-webkit-scrollbar {  height: 5px;  } 
    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 3px rgba(255, 255, 255, 0.5); 
        border-radius: 4px;
    } 
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #3c4a83; 
        border-radius: 4px;
    } 
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover { background: #0EBAC0; }
`;

export const PosterItem = styled.li`
    width: 50px;
    min-width: 50px;
    height: 70px;
    margin-right: 10px;
    border-radius: 4px;
    overflow: hidden; 

    ${props => props.Active === 'true' && css`
        box-shadow: 0px 0px 5px rgba(18, 200, 206, 0.9);  
    `}
    &:hover {
        box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.7); 
    }
`;
export const PosterItemImg = styled.img`
    display: block;
    width: 100%;
`;

