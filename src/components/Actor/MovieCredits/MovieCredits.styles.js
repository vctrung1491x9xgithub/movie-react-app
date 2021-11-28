import styled from "styled-components";

export const Title = styled.p`
     color: #FEBB01;
     margin-top: 20px;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  width: 100%; 
  margin: 20px 0;  
  gap: 25px;   
  height: ${props => props.showAll === false ? '380px' : 'auto'}; 
  overflow: ${props => props.showAll === false ? 'hidden' : 'none'}; 
`;
export const ButtonShowAll = styled.button` 
  width: 100px;
  padding: 3px 0;
  display: block;
  margin: auto;
  background-color: rgba(11,11,30,.9);
  background: linear-gradient(180deg,#0a0a19 45%,rgba(15,15,40,.8) 75%,rgba(15,15,40,0.5));
  color: #FEBB0E;
  border: none;
  font-weight: 600;
`;