import styled, { createGlobalStyle } from "styled-components";


const YELLOW = '#febb01';
// const GRAY = '#ccceca';

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      /* font-family: 'Source Sans Pro', sans-serif; */
      font-family: 'Be Vietnam', sans-serif; 
      /* scroll-behavior: smooth;   */
      /* transition: all .2s ease; */
    }
    html, body {
      font-size: 15px;
      background-color: #11112C; 
      line-height: 1.5;
      @media screen and (max-width: 960px) {
        font-size: 13px;
      }
      
    }

`;

export const AppContainer = styled.div`
  min-height: calc(100vh - 80px); 
  padding-top: 10px;
  padding-bottom: 50px;     
  @media screen and (max-width: 960px) {
    padding-bottom: 100px; 
  }
  
`;
export const Title = styled.p`
  color: ${YELLOW};
  font-size: 2rem;
  border-bottom: 1px solid ${YELLOW};
  padding-bottom: 0.5rem;
  
`;

export const Content = styled.div`
  width: 100%;
  min-height: calc(100vh - 350px);
  margin-top: 20px;  
  display: flex; 
  flex-flow: row wrap;
  gap: 25px;   
`;


export default GlobalStyle;