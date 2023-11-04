import './Contact.scss'
import icon from '../../assets/whatsapp.svg'
import location from '../../assets/Location.png'


function Contact() {
  const navigateToWebsite = () => {
    window.location.href = 'https://wa.me/34695274363';
  };

  const maps=()=>{
  window.location.href = 'https://www.google.com/maps/place/Mona%2FMia/@20.2003675,-87.4627904,17z/data=!3m1!4b1!4m6!3m5!1s0x8f4fd744e4262eaf:0x191ba298ed58fc9!8m2!3d20.2003675!4d-87.4627904!16s%2Fg%2F11pdqxdczg?hl=en-US&entry=ttu'
  }
  
    return (
      <div className="contact">
        <h3 className="contact__title">CONTACT US FOR INQUIRIES & DETAILS</h3>
        <h3 className="contact__email">integxx1@yahoo.com</h3>
        <button className="contact__button" onClick={navigateToWebsite}><img className="contact__button--logo" src={icon} alt='whatsapplogo'/>Reach out on Whatsapp</button>
        <h3>Mona Mia Loft for Sale in Tulum</h3>
        <p>Tulum, Quintana Roo, Mexico</p>

        <img className='contact__map' src={location} alt='map'/>

        <div>
          
          <button onClick={maps}> Directions </button>
        </div>
      </div>
    );
  }
  
  export default Contact;