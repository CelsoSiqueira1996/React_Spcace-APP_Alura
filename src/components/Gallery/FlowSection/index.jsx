import styled from "styled-components";
import { StyledTitle } from "../../Title";
import { FotoCard } from "../FotoCard";

const StyledFlowSection = styled.section`
    flex-grow: 1;
`;

const ImagesContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`;

export function FlowSection({ fotos, zoomImage, changeLikedValue }) {
    return (
        <StyledFlowSection>
            <StyledTitle>Navegue pela galeria</StyledTitle>
            <ImagesContainer>
                {fotos.map(foto => <FotoCard 
                    key={foto.id} 
                    foto={foto}
                    zoomImage={zoomImage} 
                    changeLikedValue={changeLikedValue}    
                />)
                }
            </ImagesContainer>
        </StyledFlowSection>
    )
}