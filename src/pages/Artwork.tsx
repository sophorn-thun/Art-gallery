import SearchInput from '../components/Search/SearchInput';
import Accordion from '../components/Accordion/Accordion';
import Pagination from '../components/Pagination/Pagination';
import Footer from '../components/Footer/Footer';
import ArtGrid from '../components/ArtGrid/ArtGrid';

function Artwork() {
  return (
    <div>
      <SearchInput />
      <Accordion
        defaultPanel="Sort"
        defaultPanelOption1="By Date"
        defaultPanelOption2="By Artist"
        defaultPanelOption3="By Title"
        firstPanel="Artist"
        firstPanelOption1="Ancient Roman"
        firstPanelOption2="Ancient Greek"
        firstPanelOption3="Unknown Artist"
        secondPanel="Artwork Types"
        secondPanelOption1="Cityscape"
        secondPanelOption2="Animals"
        secondPanelOption3="Essentials"
        thirdPanel="Styles"
        thirdPanelOption1="Japanese Culture"
        thirdPanelOption2="21st Century"
        thirdPanelOption3="19th Century"
      />
      <ArtGrid />
      <Pagination totalPage={100} postPerPage={10} />
      <Footer
        firstPara="This is front-end project using React and Typescripts."
        secondPara="Images are obtained from Chicago Art Institute's public API."
      />
    </div>
  );
}

export default Artwork;
