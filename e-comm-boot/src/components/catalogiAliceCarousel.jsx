import products from "../Data/products";
import AliceCarousel from 'react-alice-carousel'

export default function Catalogies() {

    const slides = products.map(dev => {
        return (
            <div className="d-flex justify-content-evenly align-items-center" >
                <div className='d-flex justify-content-between h-75 align-items-center border rounded p-3' style={{width: "338px"}}>
                    <img src={dev.img} alt="" style={{ width: "154px", height: "94px" }} className="p-3" />
                    <div>
                        <h5>{dev.title}</h5>
                        <p> ({dev.items.length} items) </p>
                    </div>

                </div>
            </div>
            // <div className="container rounded d-flex gap-3 align-items-center justify-content-evenly border border-1 p-3">
            //     <img src={dev.img} alt="" style={{ width: "154px", height: "94px" }} className="p-3" />
            //     <div>
            //         <h5>{dev.title}</h5>
            //         <p> ({dev.items.length} items) </p>
            //     </div>
            // </div>

        )
    })


    return (
        <>

            <AliceCarousel autoPlayInterval="3000" autoPlay="true" responsive={{ 0: { items: 3, itemsFit: 'contain' } }}    >
                {slides}
            </AliceCarousel>
        </>
    )
}