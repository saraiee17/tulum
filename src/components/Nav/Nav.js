import './Nav.scss';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Building.png'

function Nav(){
    const navigate = useNavigate();

    return(
        <div className='Nav'>
            <span class="material-symbols-rounded" onClick={() => window.history.back()}>close</span>
            <h1 className= "nav" onClick={() => navigate('/')}>Home</h1>
            <h2 className="nav" onClick={() => navigate('/Contact')}>Contact Page</h2>
            <img className="logo" src={logo}/>
        </div>
    )
}

export default Nav;