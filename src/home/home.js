import Banner from "./banner";
import ControlledCarousel from "./carousel";
import Productcard from "./productscard/Productcard";
import TeamSlider from "./ProductSlider";
import SectionOne from "./sectionone";
import SectionTwo from "./sectionTwo";
function Home() {
    return (
        <>
        <ControlledCarousel/>
        <Productcard/>
        {/* <Banner/> */}
        {/* <SectionTwo/>
        <SectionOne/>
        <TeamSlider/>
        <div>home page</div> */}
        </>
        
    )
}
export default Home;