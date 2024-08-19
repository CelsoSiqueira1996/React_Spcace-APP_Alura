import styled from "styled-components"
import { NavigationItem } from "./NavigationItem";

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`;

export function AsideBar() {
    return (
        <aside>
            <nav>
                <StyledList>
                    <NavigationItem
                        isActive={true}
                        activeIcon="/icones/home-ativo.png"
                        inactiveIcon="/icones/home-inativo.png"
                    >
                        Iníco
                    </NavigationItem>
                    <NavigationItem
                        isActive={false}
                        activeIcon="/icones/mais-vistas-ativo.png"
                        inactiveIcon="/icones/mais-vistas-inativo.png"
                    >
                        Mais vistas
                    </NavigationItem>
                    <NavigationItem
                        isActive={false}
                        activeIcon="/icones/mais-curitdas-ativo.png"
                        inactiveIcon="/icones/mais-curtidas-inativo.png"
                    >
                        Mais curtidas
                    </NavigationItem>
                    <NavigationItem
                        isActive={false}
                        activeIcon="/icones/novas-ativo.png"
                        inactiveIcon="/icones/novas-inativo.png"
                    >
                        Novas
                    </NavigationItem>
                    <NavigationItem
                        isActive={false}
                        activeIcon="/icones/surpreenda-me-ativo.png"
                        inactiveIcon="/icones/surpreenda-me-inativo.png"
                    >
                        Surpreenda-me
                    </NavigationItem>
                </StyledList>
            </nav>
        </aside>
    )
}