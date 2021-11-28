
import { Link } from "react-router-dom";
import styled from "styled-components";

export const PosterImage = styled.img`
    display: block;
    width: auto;
    height: auto;
    box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.7);
 `;
export const CastHeader = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between; 
    color: #e5e5e5; 
`;
export const CastContent = styled.div`
    display: flex;
    margin-right: -20px;
    margin-top: 15px;
    flex-flow: row wrap;
`;

export const CastItem = styled(Link)` 
    max-width: 50px;
    width: 50px;
    display: flex;
    flex-direction: column;
    margin-right: 20px;  
    margin-bottom: 15px;
    text-decoration: none; 
    &:hover {
        & > div { 
            box-shadow: 0px 0px 7px rgb(255 255 255 / 70%); 
        }
    }
`;
export const CastItemImg = styled.div` 
    overflow: hidden;
    height: 70px; 
    border-radius: 4px;
    margin-bottom: 5px;
   
`;
export const CastImg = styled.img`
    display: block;
    width: 100%;  
    height: 100%;
    object-fit: cover;
`;
export const CastItemName = styled.span`
    color: #e5e5e5;
    font-size: 0.8rem; 
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const MoreCast = styled.div`
    padding-top: 20px;
    & > a {
        text-decoration: none; 
        color: #e5e5e5;
        font-size: 0.9rem;
        border-radius: 4px;
        padding: 5px;  
        text-align: center;
        box-shadow: 0px 0px 7px rgb(100 100 100 / 70%); 

        &:hover { 
            box-shadow: 0px 0px 7px rgb(255 255 255 / 100%); 

        }
    }
`;