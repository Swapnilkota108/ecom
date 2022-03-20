
function Profile(props) {
    return <div className="profile">
        <i className={props.class}></i>
        <li className="list">{props.text}</li>
    </div>
}


function Navbar() {

    return <nav className="navbar">
        <h1 className="navbar-logo">
            <i className="fa fa-box-open"></i>&nbsp;unBox</h1>
        <div className="input-search-container">
            <input className="input-search" type="search" placeholder="search" />
            <i className="fa fa-search"></i>
        </div>
        <ul className="navbar-ul">
            <li className="list">HOME</li>
            <li className="list">GIFTBOX</li>
            <li className="list">MORE</li>

        </ul>
        <ul className="navbar-ul">
            <Profile text="WISHLIST" class="fa fa-heart" />
            <Profile text="PROFILE" class="fa fa-user" />
        </ul>
    </nav>
}












export { Navbar };