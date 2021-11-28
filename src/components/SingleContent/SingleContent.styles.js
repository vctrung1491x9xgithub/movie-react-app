import styled from "styled-components";
import { Link } from "react-router-dom";
const YELLOW = "#febb01";
const GRAY = "#ccceca";

export const ItemWrapper = styled.div`
  width: calc(20% - 20px); 
  
  @media screen and (max-width: 960px) {
    width: calc(25% - 19px);
  }
  /* @media screen and (max-width: 820px) {
    width: calc(20% - 20px);
  } */
  @media screen and (max-width: 768px) {
    width: calc(33.3% - 17px);
  }
  @media screen and (max-width: 500px) {
    width: calc(50% - 13px);
  }
`;
export const Item = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
  text-decoration: none;
  border: 1px solid transparent;
  position: relative;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.4); 
  &::before {
    content: "${({ media_type }) => (media_type ? media_type : "")}";
    background-color: #a81212;
    padding: 2px 8px;
    font-family: 'Source Sans Pro', sans-serif; 
    position: absolute;
    top: 5px;
    left: 5px;
    box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.5),
      inset 1px -1px 3px rgba(0, 0, 0, 0.5), inset 0 1px 3px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    border: 1px solid rgb(7, 84, 66, 0.3);
    box-shadow: 0px 7px 15px rgba(0, 0, 0, 0.7);
    cursor: pointer;
    & > b {
      padding: 0 10px;
      line-height: 2rem;  
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: center;
      background: rgb(2, 0, 36);
      background: linear-gradient(
        0deg,
        rgba(2, 0, 36, 0) 0%,
        rgba(0, 0, 0, 0.5) 50%,
        rgba(0, 0, 0, 0.6) 64%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  }
   
`;

export const ItemMedia = styled.img`
  width: 100%;
  display: block;
`;
export const ItemContent = styled.div`
  padding: 5px;
`;
export const ItemTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${YELLOW};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-spacing: 0.2rem;
  margin-bottom: 0.3rem;
`;
export const ItemName = styled.b`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none; 
  & > p {
    font-weight: 600;
    font-size: 1.3rem;
    color: #eeeeee;
    text-shadow: 3px 5px 3px #9e9e9e;
    transform: translateY(-30px);
  }
`;
export const ItemType = styled.div`
  text-align: end;
  margin: 10px 0;
`;
export const ItemBadge = styled.span`
  padding: 0 5px;
  border-radius: 5px;
  background-color: #c2210c;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.5),
    inset 1px -1px 3px rgba(0, 0, 0, 0.5), inset 0 1px 3px rgba(0, 0, 0, 0.2);
`;
export const ItemBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;
export const ItemPopularity = styled.p`
  display: flex;
  align-items: center;
  margin-right: 5px;
  color: ${GRAY};
  font-size: 1rem; 
  font-family: 'Source Sans Pro', sans-serif;

`;

export const ItemDate = styled.p`
  display: flex;
  align-items: center;
  color: ${GRAY};
  font-size: 1rem;
`;

export const ItemButtonDelete = styled.div`
  width: 25px;
  display: flex;
  justify-content: center; 
  margin-left: auto;
  color: #ffffff;  
  background-color: #c2210c; 
  transform: translateY(11px);
  position: relative;
  z-index: 9999;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.5),
    inset 1px -1px 3px rgba(0, 0, 0, 0.5), inset 0 1px 3px rgba(0, 0, 0, 0.2);
`;