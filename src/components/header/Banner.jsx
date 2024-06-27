import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {a,b,c} from "../../assets"



const Banner = () => {
    return (
        <Carousel showThumbs={false} swipeable={true} autoPlay interval={2000} infiniteLoop showStatus={false} className="w-full">
        <div>
            <img src={a} />
            
        </div>
        <div>
            <img src={b} />
           
        </div>
        <div>
            <img src={c}/>
            
        </div>
    </Carousel>
    )
}

export default Banner