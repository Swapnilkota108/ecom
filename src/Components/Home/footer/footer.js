import {  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {SocialMediaIconsReact} from "social-media-icons-react"



function ForwardLinks(props) {

    return <div className="forward-links">
        <Link to="#">About</Link>
        <Link to="#">Help</Link>
        <Link to="#">More</Link>

    </div>
}

function SocialLinks(props) {

    return <div className="forward-links">
    <SocialMediaIconsReact  borderColor="rgba(0,0,0,0.)" iconSize="1" borderWidth="0" borderStyle="solid" icon="twitter" iconColor="#000" backgroundColor="#fff"   url="https:twitter.com/KotaSwapnil" size="40" />
    <SocialMediaIconsReact  borderColor="rgba(0,0,0,0.)" iconSize="1" borderWidth="0" borderStyle="solid" icon="github" iconColor="#000" backgroundColor="#fff"   url="https:twitter.com/KotaSwapnil" size="40" />
    <SocialMediaIconsReact  borderColor="rgba(0,0,0,0.)" iconSize="1" borderWidth="0" borderStyle="solid" icon="linkedin" iconColor="#000" backgroundColor="#fff"   url="https:twitter.com/KotaSwapnil" size="40" />
    </div>
}



function Footer() {


    return <footer className="footer">
        <ForwardLinks />
        <SocialLinks />
    </footer>

}

export { Footer };