import styled from "styled-components"

export const StyledTitle = styled.h2`
    color: #7b78e6;
    font-size: 32px;
    text-align: ${props => props.$align? props.$align : 'left'};
`;