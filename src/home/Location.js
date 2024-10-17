import "./home.css"
import { IoLocationOutline } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";

function Location() {
return(
 <div className="main-location ">
    <div className="row">
        <div className="location-description col-lg-3 col-md-4 col-sm-12 align-items-center d-grid d-sm-flex d-md-grid flex-column">
            <h3>Location & Maps</h3>
            <div className="d-flex location-icon">
                {/* <span className="d-flex align-items-center"><IoLocationOutline /></span> */}
                <p className="m-0 address">250 Woodbridge Center Dr.Woodbridg NJ 07095</p>
            </div>
           <div className="d-flex flex-md-column flex-sm-row  location-address">
                <span className="me-sm-1">E-mail:</span>
                <span className="me-sm-3">support@castlefurnitureegypt.com</span>
                <span className="me-sm-3"> | </span>
                <span className="me-sm-2">Phone:</span>
                <span>(732) 636-1914</span>
                <span className="me-sm-1"> , </span>
                <span >(201) 707-3583</span>
           </div>
           <div className="mt-4 button"> View location  <FaLongArrowAltRight /></div>
        </div>
        <div className="location col-lg-9 col-md-8 col-sm-12">
        <iframe
           src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=250%20Woodbridge%20Center%20Dr,%20Woodbridge,%20NJ%2007095+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            frameBorder="0"
            style={{ border: 0 ,height:"100%" ,width:"100%"}}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Humanity First Indonesia"
            />
        </div>
    </div>
 </div>
)   
}

export default Location;