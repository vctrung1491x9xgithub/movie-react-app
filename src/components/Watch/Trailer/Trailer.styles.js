import styled from "styled-components"; 

export const TrailerContainer = styled.div`
    width: 100%;
    height: 100%;  
    & > p {
        margin-bottom: 10px;
        color: #e5e5e5;
        font-weight: 600;
        text-transform: uppercase;
    }
    .slick-list {margin: 0 -10px;}
    .slick-slide>div {padding: 0 10px;}
     
`;

export const CarouselItem = styled.div`  
    position: relative;
    & > img {
        display: block;
        width: 100%; 
        height: 150px;
        object-fit: fill; 
        border-radius: 4px;
        margin-bottom: 5px;
        box-shadow: 0px 0px 5px rgba(0,0,0, 0.7);
    }
    &:hover {
        &::before {
            content: "◁";
            color: #FFF;
            background-color: rgba(0,0,0, 0.7);
            width: 100%;
            height: 98%; 
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2.5rem;
        }
    }
 `;