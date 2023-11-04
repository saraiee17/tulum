import './Contact.scss'
import icon from '../../assets/whatsapp.svg'
import location from '../../assets/Location.png'


function Contact() {
  const navigateToWebsite = () => {
    window.location.href = 'https://wa.me/34695274363';
  };
    return (
      <div className="contact">
        <h3 className="contact__title">CONTACT US FOR INQUIRIES & DETAILS</h3>
        <h3 className="contact__email">integxx1@yahoo.com</h3>
        <button className="contact__button" onClick={navigateToWebsite}><img className="contact__button--logo" src={icon} alt='whatsapplogo'/>Reach out on Whatsapp</button>
        <h3>Mona Mia Loft for Sale in Tulum</h3>
        <p>Tulum, Quintana Roo, Mexico</p>

        <img className='contact__map' src={location} alt='map'/>

        <div>
          
          <button> Directions </button>
        </div>
      </div>
    );
  }
  
  export default Contact;