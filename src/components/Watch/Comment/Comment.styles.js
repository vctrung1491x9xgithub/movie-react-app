
import styled from "styled-components";


export const CommentWrapper = styled.div`
    width: 100%; 
        & > p {
            color: #feab1d;
            text-transform: uppercase;
        }
    `;

export const CommentContent = styled.div`
    max-width: 700px; 
    margin-top: 50px; 
    padding: 0 10px 5px 10px;
    
    border-radius: 5px;
    box-shadow: 0 0 2px rgba(100, 100, 100, 0.5);
`;

export const Content = styled.div`
   color: #e3e3e3;  
   margin-bottom: 10px; 
`;
export const Info = styled.p`
    display: inline-block;
    background-color: #11112C;  
    transform: translate(5px,-15px);
    color: #0ebac0;
    font-weight: 600;
`;
export const Time = styled.p`
    width: 100%;
    text-align: end;
    color: #b7b5b5; 
`;
export const CommentControl = styled.form`
    margin-top: 10px;
    max-width: 700px; 
`;
export const CommentInput = styled.textarea`
    width: 100%; 
    border-radius: 5px;  
    color: #e5e5e5; 
    padding: 10px;
    background-color: transparent; 
    &:focus {
       outline: none;
    }
`;
export const Control = styled.div`
    width: 100%;
    text-align: end;
`;
export const Button = styled.button`
     padding: 0 5px;
     border: none; 
     cursor: pointer;
     color: #111111; 
     font-weight: 600;
     background-color: #feab1d;
     border: 1px solid transparent;

     &:hover {
        background-color: transparent;
        color: #feab1d;  
        border: 1px solid #feab1d;
     }
`;
