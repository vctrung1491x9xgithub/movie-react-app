
import { Link } from "react-router-dom";
import styled  from "styled-components";


export const CastWrapper = styled.div`
   
`;
export const CastHeader = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between; 
    color: #e5e5e5;  
`;
export const CastContent = styled.div`
    display: flex;
    margin-right: -25px;
    margin-top: 15px;
    flex-flow: row wrap;
`;

export const CastItem = styled(Link)`  
    width: 100%;
    max-width: calc(10% - 25px);
    display: flex;
    flex-direction: column;
    margin-right: 25px;  
    margin-bottom: 15px;
    text-decoration: none; 
    &:hover {
        & > div { 
            box-shadow: 0px 0px 7px rgb(255 255 255 / 70%); 
        }
    }
    @media screen and (max-width: 1024px) {
        max-width: calc(12.44444% - 25px);
    }
    @media screen and (max-width: 959px) {
        max-width: calc(10% - 25px);
    }
    @media screen and (max-width: 767px) {
        max-width: calc(12.44444% - 25px);
    }
    @media screen and (max-width: 599px) {
        max-width: calc(14.22222% - 25px);
    }
    @media screen and (max-width: 479px) {
        max-width: calc(16.66667% - 25px);
    }
    @media screen and (max-width: 479px) {
        max-width: calc(20% - 25px);
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
    & > a {
        text-decoration: none; 
        color: #e5e5e5;
        font-size: 0.9rem;  
        padding: 0 5px;
        border-radius: 4px;
        &:hover { 
            box-shadow: 0px 0px 7px rgb(255 255 255 / 100%); 

        }
    }
`;