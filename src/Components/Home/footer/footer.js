
function BoldFont(props){
    return <p className="bold-font">{props.text}</p>
}

function SocialLinks(props){

    return <div className="social-links">
       <>
       <BoldFont text={props.text}/>
       </>
        <p>{props.Link1}</p>
        <p>{props.Link2}</p>
        <p>{props.Link3}</p>

    </div>
}



function Footer(){
 

return <footer className="footer">
    <SocialLinks text="Connect" Link1="Github" Link2="Twitter" Link3="LinkedIn"/>
    <SocialLinks text="About" Link1="Queries" Link2="unBox" Link3="more"/>
</footer>

}

export { Footer };