import { Chip } from "@material-ui/core";
import styled from "styled-components";


export const GenresContainer = styled.div`
    margin: 6px 0;
`;
export const GenresTitle = styled.span`
    color: #FFF;
    margin-right: 4px;
    padding-bottom: 2px;
    border-bottom: 1px solid #C23012;
    
`;

export const ChipElement = styled(Chip)`
    margin: 2px !important;
    border-radius: 4px !important;
    box-shadow: 1px 3px 3px rgb(0 0 0 / 50%), inset 1px -1px 3px rgb(0 0 0 / 50%), inset 0 1px 3px rgb(0 0 0 / 20%);   

`;

export const ErrorMessage = styled.span`
    color: #FEBB13;
    font-style: italic;
    
`;