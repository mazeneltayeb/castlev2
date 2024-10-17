import "./home.css"
import ControlledCarousel from "./carousel"

function SectionOne(){
    return(
        <div className="sectionone">
            <div className="row justify-content-between">
            <div className="d-flex flex-md-row flex-column justify-content-center align-items-center col-lg-12 col-md-12  ready mb-5">
                            <span className="mt-3 mx-3">Welcome to </span> 
                            <span className="mt-3 mx-3">Castle Furniture Egypt</span>
                        </div>
                <div className="col-lg-6 col-md-6 text-center text-lg-start align-items-center d-flex">
                       <p className="d-flex justify-content-center ">Let your home décor make a grand statement with our luxurious furniture pieces
                             at Castle Furniture Egypt. For over 25 years, we have been recognized for our 
                             distinctive and luxurious furniture sets that are made from the highest quality
                              materials and fabrics. We specialize in upholstery living room sets as well
                               as bedroom sets and many more luxurious furniture pieces to complement your 
                               entire home. Our collection includes Traditional Egyptian, Victorian, European, 
                               and Classic designs. We take great pride in building great and long lasting
                                relationships with our customers. We are service oriented and are ready 
                                to help you take home your next exquisite bedroom or living room set.
                        </p>
                    </div>
                <div className=" sectionone-video col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center ">
                    <video className="object-fit-fill" controls muted loop autoPlay>
                        <source src={require (`./vedio/sectionone.mp4`)}/>
                    </video>
                </div>
            </div>
        </div>
    )
}
export default SectionOne;