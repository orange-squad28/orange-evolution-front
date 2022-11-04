import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'; 
import style from './Carousel.module.css'
export default function Container() {
    return (
        <div className={style.CCaroseul}>
            <Carousel className={style.Caroseul} stopOnHover={true} autoPlay={true} infiniteLoop={true} centerSlidePercentage={85} emulateTouch={true}  selectedItem={1} centerMode transitionTime={1000} showArrows={false} showThumbs={false} showStatus={false} useKeyboardArrows={true} >
                <div>
                    <img src="https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className={style.Img1} alt="Uma laranja muito suculenta/Foto Exemplo" />
                    <p className="legend">Uma laranja muito suculenta</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/3676/girl-morning-breakfast-orange-juice.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className={style.Img2} alt="Suco de laranja/Foto Exemplo"/>
                    <p className="legend">Suco de laranja</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/3767958/pexels-photo-3767958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className={style.Img3} alt="Tomando suco/Foto Exemplo"/>
                    <p className="legend">Tomando suco</p>
                </div>
            </Carousel>
        </div>
    )
};