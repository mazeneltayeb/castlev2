import Banner from "./banner";
import ControlledCarousel from "./carousel";
import Footer from "./Footer";
import Productcard from "./productscard/Productcard";
import TeamSlider from "./ProductSlider";
import SectionOne from "./sectionone";
import Sectionthree from "./Sectionthree";
import SectionTwo from "./sectionTwo";
function Home() {
    return (
        <>
        <ControlledCarousel/>
        <SectionOne/>
        <Productcard/>
        <Sectionthree/>
        <Footer/>
        {/* <TeamSlider/>
        <Banner/>
        <SectionTwo/>
        <TeamSlider/> */}

        </>
        
    )
}
export default Home;