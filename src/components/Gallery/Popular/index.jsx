import { styled } from "styled-components"
import fotos from './fotos-populares.json'
import { StyledTitle } from "../../Title"

const FotosColumn = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const StyledImage = styled.img`
    max-width: 212px;
    border-radius: 20px;
`

const StyledButton = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;

export function Popular() {
    return (
        <section>
            <StyledTitle $align='center'>Populares</StyledTitle>
            <FotosColumn>
                {fotos.map(foto => <StyledImage key={foto.id} src={foto.path} alt={foto.alt}/>)}
            </FotosColumn>
            <StyledButton>Ver mais</StyledButton>
        </section>   
    )
}
