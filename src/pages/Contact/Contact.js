import './Contact.scss'
import icon from '../../assets/whatsapp.svg'
import location from '../../assets/Location.png'


function Contact() {
    return (
      <div className="contact">
        <h2 className="contact__title">CONTACT US FOR INQUIRIES & DETAILS</h2>
        <h3 className="contact__email">xunkarivilla@gmail.com</h3>
        <button className="contact__button"><img className="contact__button--logo" src={icon} alt='whatsapplogo'/>Reach out on Whatsapp</button>
        <h3>XunKari Villa for Sale in Tulum</h3>
        <p>Tulum, Quintana Roo, Mexico</p>

        <img className='contact__map' src={location} alt='map'/>

        <div>
          
          <button> Directions </button>
        </div>
      </div>
    );
  }
  
  export default Contact;