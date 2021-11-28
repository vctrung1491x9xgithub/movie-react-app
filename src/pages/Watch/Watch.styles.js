import styled, { css } from 'styled-components';


// const letterSpacing = '1px';

export const Backdrop =styled.div`
    position: absolute;
    left: 0;
    width: 100vw;
    height: 400px;
    overflow: hidden;
`;
export const BackdropImg =styled.img`
    display: block;
    width:  100%;
`;
export const MovieTitle = styled.h1`
    font-size: 2rem;
    color: #febb13;
`;
export const OriginalTitle = styled.h3`
    color: #e5e5e5;
    font-size: 1.3rem; 
`;
 
export const VoteAverage = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin: 10px 0;
`;
export const VoteCount = styled.p`
    color: #e5e5e5;  
    margin-left: 5px;
    @media screen and (max-width: 400px) {
        margin-left: 0; 
    }
    
`;
export const Overview = styled.div`
    color: #e5e5e5; 
    font-family: 'Be Vietnam', sans-serif;
    text-align: justify; 
`;

export const MoreInfo = styled.ul`
    list-style: none;
`;
export const InfoItem = styled.li`
        margin: 10px 0;
        color: #e1e1e1;
        display: flex;  
        & > span { 
            margin-right: 5px;
            color: #c6c6c6;
        }
        & > b, a {
            font-size: 13px;
            padding: 0 5px;  
            display: flex;
            align-items: center;
            text-decoration: none;
            margin: 2px;
            color: #e5e5e5; 
            font-family: 'Source Sans Pro', sans-serif;
        }
        ${props => props.label === 'type' && css`
            & > a { 
                font-weight: normal;
                background-color: #068254;  
                box-shadow: 1px 3px 3px rgb(0 0 0 / 50%),
                    inset 1px -1px 3px rgb(0 0 0 / 50%), 
                    inset 0 1px 3px rgb(0 0 0 / 20%);
            }
        `} 
        ${props => props.label === 'genre' && css`
            flex-flow: row wrap;
            & > a { 
                background-color: #a11111; 
                box-shadow: 1px 3px 3px rgb(0 0 0 / 50%),
                    inset 1px -1px 3px rgb(0 0 0 / 50%), 
                    inset 0 1px 3px rgb(0 0 0 / 20%); 
                    
        }
        `}
     
`;
