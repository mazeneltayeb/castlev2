import myJson from "./productscard.json";
import "./productscard.css"
import ReactWhatsapp from 'react-whatsapp';

function Productcard() {
    return(
        <div className="product row gap-4 d-flex justify-content-center align-items-center ">
            <div className="text-center title-sectionone mb-4">SPECIAL DEAL</div>
                {myJson.map((product)=>{
                    {
                        return(
                            <div key={product.id} className="product-card col-lg-2 col-md-4 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                                <div className="product-img">
                                <img src={require (`${product.img}`)} alt={product.alt} className=""/>
                            </div>
                            <div className="product-info text-center">
                                <p>{product.title}</p>
                                <ReactWhatsapp className="whatsapp-details" number="+201002955430" message={`Hello castlefurnitureegypt i ask for this Product name: ${product.name}, Code: ${product.id} `} >
                                    Details
                                </ReactWhatsapp>
                            </div>
                        </div>
                            )
                    }
                }) }
        </div>
    )
}
export default Productcard;