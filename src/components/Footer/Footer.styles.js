import styled from "styled-components";
// import bgFooter from '../../assets/images/bgFooter.png';
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
    max-width: 100vw;  
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;  
    background-color: rgba(11,11,30, .9);
        background: linear-gradient(5deg,#0a0a19 45%,rgba(15,15,40,.8) 75%,rgba(15,15,40,0.5));
    /* &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%; 
        
    } */
`;
export const TextWrapper = styled.ul`
    color: #8c8c8c;  
    padding: 40px 0;

`; 
export const TextItem = styled.li`
     list-style: none;
     display: flex;
     flex-direction: column;
`;
export const TextTitle = styled.p` 
    font-size: 1.2rem;
    color: #FEB50B; 
    font-weight: bold;
    margin-bottom: 10px;
`;
export const TextLink = styled(Link)`
    color: #C4C6A5;
    text-decoration: none;
    margin: 5px 0;
`;