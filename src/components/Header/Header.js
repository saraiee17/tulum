import './Header.scss';

function Header(){

    return(
        <div className='header'>
                <span class="material-symbols-rounded">menu</span>
                <h1 className='header__title'>Villa for Sale in Tulum</h1>
                <div className='header__flex'>
                    <p className='header__nav'>Home</p>
                    <p className='header__nav'>Contact</p>
                </div>
        </div>
    )
}

export default Header;