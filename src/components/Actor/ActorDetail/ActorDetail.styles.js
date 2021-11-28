import styled from "styled-components";

export const ActorName = styled.h1`
     color: #febb01;
`;

export const Biography = styled.div`
    color: #e5e5e5;
    text-align: justify;
    max-height: 200px;
    overflow: auto;
    padding-right: 10px;
    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    } 
    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 3px rgba(255, 255, 255, 0.5); 
        border-radius: 4px;
    } 
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #FEBB01; 
        border-radius: 4px;
    } 
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #0EBAC0; 
    }
    & > p {   
        display: inline-block;
        padding:  0 5px;
        font-family: 'Source Sans Pro',sans-serif;
        margin-right: 5px;
        border-radius: 4px;
        background-color: #a11111;
        box-shadow: 1px 3px 3px rgb(0 0 0 / 50%), 
            inset 1px -1px 3px rgb(0 0 0 / 50%), 
            inset 0 1px 3px rgb(0 0 0 / 20%); 
   }
`;

export const ActorInfo = styled.ul`
   margin: 20px 0;
`;
export const ActorInfoItem = styled.li`
    list-style: none;
    color: #c6c6c6;
    margin: 10px 0;
    & > span {
        color: #e5e5e5;
        margin-left: 5px;
    }
`;

