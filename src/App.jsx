import styled from "styled-components";
import { GlobalStyle } from "./components/GlobalStyles";
import { Header } from "./components/Header";
import { AsideBar } from "./components/AsideBar";
import { Banner } from "./components/Banner";
import bannerImage from "./assets/banner.png";
import { Gallery } from "./components/Gallery";
import fotos from "./fotos.json";
import { useEffect, useState } from "react";
import { ModalZoom } from "./components/ModalZoom";
import { Footer } from "./components/Footer";

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  min-height: 100vh;
  width: 100%;
`

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;


function App() {

  const [fotosList, setFotosList] = useState(fotos);
  const [fotoSelected, setFotoSelected] = useState(null);
  const [filter, setFilter] = useState('');
  const [tagId, setTagId] = useState(0);

  useEffect(() => { 
    const fotosFiltered = fotosList.map((foto) => {
      const filterCondition = !filter || foto.titulo.toLowerCase().includes(filter.toLowerCase());
      const tagCondition = !tagId || foto.tagId === tagId;
      return {
        ...foto,
        display: filterCondition && tagCondition
      }
    })
    setFotosList(fotosFiltered);
  }, [tagId, filter]);

  function changeLikedValue(id) {
    if(fotoSelected?.id === id) {
      setFotoSelected({ ...fotoSelected, liked: !fotoSelected.liked });
    }
    setFotosList(fotosList.map((foto) => ({
      ...foto,
      liked: foto.id === id ? !foto.liked : foto.liked
    })));
  }

  return (
    <>
      <FundoGradiente>
        <AppContainer>
          <Header filterBySearchText={(filter) => setFilter(filter)}/>
          <MainContainer>
            <AsideBar />
            <GalleryContent>
              <Banner 
                backgroundImage={bannerImage} 
                texto="A galeria mais completa de fotos do espaço!"
              />
              <Gallery 
                tagId={tagId}
                filterByTag={(tagId) => setTagId(tagId)}
                fotos={fotosList}
                zoomImageSelected={(foto) => {
                  setFotoSelected(foto);
                  window.scrollTo(0, 290);
                }}
                changeLikedValue={(id) => changeLikedValue(id)}
              />
            </GalleryContent>
          </MainContainer>
          <Footer />
        </AppContainer>
        <ModalZoom 
          foto={fotoSelected} 
          closeImage={() => setFotoSelected(null)} 
          changeLikedValue={(id) => changeLikedValue(id)}
        />
        <GlobalStyle />
      </FundoGradiente>
    </>
  )
}

export default App
