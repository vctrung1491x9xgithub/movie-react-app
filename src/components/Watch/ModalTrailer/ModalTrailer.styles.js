 
import styled from "styled-components";
import CloseIcon from '@material-ui/icons/Close';

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0, 0.5);
    z-index: 99999; 
`;
export const ModalContainer = styled.div`
    width: 100%;  
    max-width: 1000px;
    height: 100%;
    max-height: 600px;  
    @media screen and (max-width: 960px) {
        width: 80%;   
        max-height: 500px;  
    } 
    @media screen and (max-width: 700px) {
        width: 90%;   
    }
    @media screen and (max-width: 500px) {
        max-height: 400px;   
    }
`;

export const ModalContent = styled.div`   
    margin: 20px;
    & > iframe { 
        width: 100%;
        min-height: 500px; 
        @media screen and (max-width: 960px) {
            min-height: 400px;  
        }
        @media screen and (max-width: 500px) {
            min-height: 300px;   
        }
   }
 `;

export const ModalHeader = styled.div`
    text-align: end; 
 `;

export const CloseModal = styled(CloseIcon)`
    color: #e5e5e5;
    font-size: 2rem !important;
 `;