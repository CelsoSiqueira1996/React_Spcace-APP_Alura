import styled from "styled-components";

const StyledListItem = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$active? '#7b78e5' : '#d9d9d9'};
    font-family: ${props => props.$active? 'GandhiSansBold' : 'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 22px;
`;

export function NavigationItem({ activeIcon, inactiveIcon, children, isActive=false }) {
    return(
        <StyledListItem $active={isActive}>
            <img src={isActive? activeIcon : inactiveIcon} alt=""/>
            {children}
        </StyledListItem>

    )
}