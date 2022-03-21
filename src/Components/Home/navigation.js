import {  faBoxOpen, faHeart, faUser, faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Profile(props) {
    return <div className="profile">
        <FontAwesomeIcon icon={props.icon} size="lg"/>
        <Link to={props.link} className="list">{props.text}</Link>
    </div>
}


function Navbar() {

    return <nav className="navbar">
        <h1 className="navbar-logo">
           <FontAwesomeIcon icon={faBoxOpen} size="lg"/>&nbsp;unBox</h1>
        <div className="input-search-container">
            <input className="input-search" type="search" placeholder="search" />
            <FontAwesomeIcon icon={faSearch}/>
        </div>
        <ul className="navbar-ul">
            <Link to="/home" className="list">HOME</Link>
            <Link to="/giftbox" className="list">GIFTBOX</Link>
            <Link to="/more" className="list">MORE</Link>

        </ul>
        <ul className="navbar-ul">
            <Profile link="/wishlist" text="WISHLIST" icon={faHeart} />
            <Profile link="/profile" text="PROFILE" icon={faUser} />
            <Profile link="/cart" text="CART" icon={faCartShopping}/>
        </ul>
    </nav>
}












export { Navbar };