import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const YELLOW = '#febb01';

export const NavBar = styled.div`
    max-width: 100vw; 
    padding: 0 40px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 99;
    background: linear-gradient(180deg, #0a0a19 0%,rgba(15,15,40,.8) 65%,rgba(15,15,40,0));
    /* box-shadow: 0 1px 5px #000; */
    @media screen and (max-width: 960px) {
    padding: 0 25px;
        
    } 

`;

export const NavBarContent = styled.div`
    width: 100%;
    max-width: 1900px;
    margin: auto;
    height: 80px; 
    display: flex;
    align-items: center; 
    justify-content: space-between;
`;
 
export const NavBarBrand = styled(Link)`
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
`;

export const Logo = styled.p`
    font-size: 2.5rem;
    color: ${({ color }) => (color ? color : '#FFF')};
`;

export const Menu = styled.ul`
    display: flex;
    align-items: center;  
    @media screen and (max-width: 960px) { 
        position: fixed; 
        bottom: 0;
        left: 0;
        width: 100vw;  
        height: 80px;
        justify-content: center;
        background: linear-gradient(0deg, #0a0a19 10%,rgba(15,15,40,.8) 65%,rgba(15,15,40,0)); 
    }
`;

export const MenuItem = styled.li`
    list-style: none;   
    margin: 5px 20px;
    @media screen and (max-width: 480px) {
        margin: 5px;
    }
`;

export const MenuLink = styled(NavLink)`
    color: #e5e5e5; 
    font-family: 'Be Vietnam', sans-serif;
    font-size: 1rem;
    text-decoration: none;
    padding: 5px 10px; 
  
    &:hover {
        /* background-color: #FEBB01; */
        color: ${YELLOW};
    }
    &.active {
        background-color:  ${YELLOW};
        color: #111;
        border-radius: 4px;
        box-shadow: 0px 3px 1px -2px rgb(190 190 190 / 20%), 0px 2px 2px 0px rgb(190 190 190 / 14%), 0px 1px 5px 0px rgb(190 190 190 / 12%);
    }
    
`;
export const LeftMenu = styled.div`
    display: flex;
    align-items: center;
`;
export const LeftMenuItem = styled(NavLink)`
    color: ${YELLOW}; 
    font-size: 2rem;
    margin-bottom: 10px;
    margin-left: 20px;
    border-bottom: 1px solid transparent;
    &.active {
         border-bottom: 1px solid ${YELLOW};
    }
`;
export const SearchControl = styled.div`
    display: flex;
`;