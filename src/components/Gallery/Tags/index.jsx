import styled from "styled-components";
import tags from "./tags.json";

const StyledTag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid ${props => props.$selectedTag? '#C98CF1' : 'transparent'};
    &:hover {
      border-color: #C98CF1;
    }
`;

const StyledTags = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    margin: 2rem 0;
`;

const StyledTagTitle = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`;

export function Tags({ filterByTag, tagId }) {
    return(
        <StyledTags>
            <StyledTagTitle>Busque por tags:</StyledTagTitle>
            {tags.map((tag) => <StyledTag 
                    $selectedTag={tagId === tag.id}
                    key={tag.id} 
                    onClick={() => filterByTag(tag.id)}
                >
                    {tag.titulo}
                </StyledTag>
            )}
        </StyledTags>
    )
}