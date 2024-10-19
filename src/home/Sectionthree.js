import "./home.css"
import bedroom from "./productscard/img/1.png"
import livingroom from "./productscard/img/2.jpg"
import diningroom from "./productscard/img/3.jpg"
import accessories from "./productscard/img/4.jpg"
import chandeliers	 from "./productscard/img/5.jpg"
import antiqueclocks from "./productscard/img/6.jpg"

function Sectionthree (){
    return(
        <div className="row section-three 'd-flex  justify-content-evenly align-items-center mt-5">
                    <span className="col-sm-12 col-lg-12 col-md-12 text-center mb-5">Our Inventory Includes</span>
    <div className="row p-5 justify-content-center">
        <div className="col-lg-3 col-md-6 col-sm-6  text-center section-three-card mb-5">
            <img className="img-fluid mb-5" src={bedroom} alt="image"/>
            <span >bed room</span>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6   text-center section-three-card mb-5">
            <img className="img-fluid mb-5" src={livingroom} alt="image"/>
            <span >living roomm</span>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6   text-center section-three-card mb-5">
            <img className="img-fluid mb-5" src={diningroom} alt="image"/>
            <span >dining room</span>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6  text-center section-three-card mb-5">
            <img className="img-fluid mb-5" src={accessories} alt="image"/>
            <span >accessories</span>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6  text-center section-three-card mb-5">
            <img className="img-fluid mb-5" src={chandeliers} alt=""/>
            <span >chandeliers</span>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6  text-center section-three-card mb-5">
            <img className="img-fluid mb-5" src={antiqueclocks} alt="image"/>
            <span >antiqueclocks</span>
        </div>
    </div>
    </div>
    )
}
export default Sectionthree;