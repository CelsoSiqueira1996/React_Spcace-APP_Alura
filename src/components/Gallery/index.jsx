import styled from "styled-components";
import { FlowSection } from "./FlowSection";
import { Popular } from "./Popular";
import { Tags } from "./Tags";

const GalleryContainer = styled.div`
    display: flex;
    gap: 24px;
`;

export function Gallery({ filterByTag, fotos=[], zoomImageSelected, changeLikedValue, tagId }) {
    return (
        <>
            <Tags tagId={tagId} filterByTag={filterByTag}/>
            <GalleryContainer>
                <FlowSection fotos={fotos} zoomImage={zoomImageSelected} changeLikedValue={changeLikedValue} />
                <Popular />
            </GalleryContainer>
        </>
    )
}