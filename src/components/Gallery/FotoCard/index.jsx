import { styled } from "styled-components"
import { IconButton } from "../../IconButton"
import { useState } from "react"

const Figure = styled.figure`
    width: ${props => props.$expandida ? '90%' : '460px'};
    max-width: 100%;
    margin: 0;
    display: ${props => props.$display? 'flex' : 'none'};
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export function FotoCard({ foto, expandida=false, zoomImage, changeLikedValue }) {
    return (
        <Figure $expandida={expandida} id={`foto-${foto.id}`} $display={foto.display}>
            <img src={foto.path}/>
            <figcaption>
                <h3>{foto.titulo}</h3>
                <StyledFooter>
                    <h4>{foto.fonte}</h4>
                    <IconButton onClick={() => changeLikedValue(foto.id)}>
                        <img 
                            src={foto.liked? "/icones/favorito-ativo.png" : "/icones/favorito.png"} 
                            alt="Icone de favorito" 
                        />
                    </IconButton>
                    {!expandida && <IconButton aria-hidden={expandida} onClick={() => zoomImage(foto)}>
                        <img src="/icones/expandir.png" alt="Icone de expandir" />
                    </IconButton>}
                </StyledFooter>
            </figcaption>
        </Figure>
    )
}