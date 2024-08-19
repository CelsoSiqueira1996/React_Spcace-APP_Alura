import { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const StyledTextField = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    &::placeholder {
       color: rgba(65, 63, 63, 1);
   }
`;

const LupaIcon = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;

export function TextField({ filterBySearchText }) {

    const [text, setText] = useState('');

    return (
        <StyledContainer>
            <StyledTextField 
                value={text} 
                placeholder="O que você procura?"  
                onChange={(event) => {
                        setText(event.target.value);
                        filterBySearchText(event.target.value);
                    }
                }
            />
            <LupaIcon 
                src="/icones/search.png" 
                alt="ícone de lupa" 
            />
        </StyledContainer>
    )
}