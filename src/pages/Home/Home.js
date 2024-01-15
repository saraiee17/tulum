import './Home.scss';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import Cenote from '../../assets/Building.png'
import card1 from '../../assets/curd.jpg'
import card2 from '../../assets/Bedroom.png'
import card3 from '../../assets/card3.png'
import dog1 from '../../assets/Bathroom.png'
import dog2 from '../../assets/Patio.png'
import dog3 from '../../assets/Bedroom 2.png'
import dog4 from '../../assets/Kitchen.png'
import dog5 from '../../assets/Rooftop 1.jpg'
import dog6 from '../../assets/Living Room.png'
import instagram from '../../assets/instagram.png'
import bed from '../../assets/bed.png'
import toilet from '../../assets/toilet.png'
import stove from '../../assets/stove.png'
import sofa from '../../assets/sofa.png'
import balcony from '../../assets/balcony.png'
import pool from '../../assets/pool.png'
import rooftop from '../../assets/rooftop.png'

function Home(){ 
        const [currentSlide, setCurrentSlide] = useState(0);

        const slides = [
            dog1, 
            dog2,
            dog3,
            dog4,
            dog5,
            dog6,
          ];

        const nextSlide = () => {
          setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
        };
      
        const prevSlide = () => {
          setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
        };


    return(
        <div className='home'>
                <section className='home__hero'>
                    <img src={Cenote} alt='hero pic' className="home__hero--pic"/>
                    <div className="home__hero--text">
                        <p className='home__hero--title'>BIENVENIDO</p>
                        <h2 className='home__hero--slogan'>YOUR PEACE IN THE HEART OF TULUM $315,000</h2>
                    </div>
                </section>
                <section className='home__squares'>
                    <h2 className="deeper"> VILLA LOFT, MONA MIA</h2>
                    <div className='home__squares--flex'>
                        <div className='home__squares--single'>
                            <img className='home__squares--icon' src={bed} alt='bed'/>
                            <p>2 bedrooms</p>
                        </div>
                        <div className='home__squares--single'>
                            <img className='home__squares--icon' src={toilet} alt='toilet'/>
                            <p>2 bathrooms</p>
                        </div>
                        <div className='home__squares--single'>
                            <img className='home__squares--icon' src= {stove} alt='stove'/>
                            <p>  kitchen </p>
                        </div>
                        <div className='home__squares--single'>
                            <img className='home__squares--icon' src={sofa} alt='sofa'/>
                            <p>Living room</p>
                        </div>
                        <div className='home__squares--single'>
                            <img className='home__squares--icon' src={balcony} alt='balcony'/>
                            <p>2 terraces</p>
                        </div>
                        <div className='home__squares--single'>
                            <img className='home__squares--icon' src={pool} alt='pool'/>
                            <p>Private Pool</p>
                        </div>
                        <div className='home__squares--single'>
                            <img className='home__squares--icon' src={rooftop} alt='rooftop'/>
                            <p>Rooftop</p>
                        </div>
                    </div>
                </section>
                <section className='home__details'>
                    <h3 className="deeper">Private sale by the owner. Available Now!</h3>
                    <h3 className="deeper">Biometric Security, Rooftop Terrace, Infinity Pool </h3>
                    <Link to='/Contact'><button>CONTACT US</button></Link>
                </section>
                <section className='home__slideshow'>
                    <h4>VILLA LOFT, MONA MIA</h4>
                    <div className="slideshow-container">

                        <button className="prev" onClick={prevSlide}>&#10094;</button>
                        <img className="slideImg" src = {slides[currentSlide]} alt = {`Slide ${currentSlide}`}/>
                        <button className="next" onClick={nextSlide} >&#10095;</button>        
                    </div>
                
                </section>
                <section className='home__cards'>
                    <h4>CONNECT TO DISCONNECT</h4>
                    <div className='home__cards--flex'>
                        <div className='home__cards--single'>
                            <img className='home__cards--img' src={card1} alt= 'map'/>
                            <div>
                                <h3 className="deeper">Location</h3>
                                <p>Strategically located outside of Tulum's urbanc chaos. Connect with nature and tranquility of the moment</p>
                            </div>
                        </div>  
                        <div className='home__cards--single'>
                            <img className='home__cards--img' src={card2} alt= 'pool'/>
                            <div>
                                <h3 className="deeper">Location</h3>
                                <p>Infinity Pool, Biometric Security, Rooftop Terrace, Penthouse Loft, Open Concept Living, Natural Materials</p>
                            </div>
                        </div>  
                        <div className='home__cards--single'>  
                            <img className='home__cards--img' src={card3} alt= 'Arch'/>
                            <div>
                                <h3 className="deeper">Invest in Tulum</h3>
                                <p>Tulum has an attractive real estate market that returns high ROI. Invest in one of the most in-demand vacation destinations in the world.</p>
                            </div>
                        </div>  
                    </div>
                </section>
                <section className='home__gallery'>
                    <h4>PHOTO GALLERY, PHASE I</h4>
                    <div className='home__gallery--container'>
                        <img className='home__gallery--img' src={dog1} alt= 'placeholder'/>
                        <img className='home__gallery--img' src={dog2} alt= 'placeholder'/>
                        <img className='home__gallery--img' src={dog3} alt= 'placeholder'/>
                        <img className='home__gallery--img' src={dog4} alt= 'placeholder'/>
                        <img className='home__gallery--img' src={dog5} alt= 'placeholder'/>
                        <img className='home__gallery--img' src={dog6} alt= 'placeholder'/>
                    </div>
                </section>
                <footer className='home__contact'>
                    <h3 className="deeper">UNIQUE OPPORTUNITY</h3>
                    <p>Mona Mia Loft is now complete. Take ownership of this beautiful Mona Mia Loft Unit!</p>
                    <p>With the opening of Tulum Airport ,TQO, this loft at this price point in the area will not be on the market for long.</p>
                    <div className='home__contact--flex'>
                        <Link to='/Contact'><button>CONTACT US TODAY!</button></Link>
                        <img className='home__contact--instagram' src={instagram} alt='instagram'/>
                    </div>
                </footer>
        </div>
    )
}

export default Home;
