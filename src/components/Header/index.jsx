import styled from "styled-components"
import { TextField } from "../TextField";

const StyledHeader = styled.header`
    padding: 60px 0px;
    display: flex;
    justify-content: space-between;
    > img {
        max-width: 212px;
    }
`;

export function Header({ filterBySearchText }) {
    return (
        <StyledHeader>
            <img src='/imagens/logo.png' alt=""/>
            <TextField filterBySearchText={filterBySearchText}/>
        </StyledHeader>
    )
}