import './footer.scss';




export default function Footer({logo, copyright,question,fbIcon, instaIcon, twitterIcon, email}){
    return(
        <div className="footer">
            <div className="footerWrapper">
                <div className="logoContainer">
                    <img src={logo} alt='logo image' />
                </div>
                <div className="footerContainer">
                    <p>{copyright}</p>
                    <p>{question}</p>
                    <p>{email}</p>
                </div>
            </div>
            <div className="iconsContainer">
                <img src={fbIcon} alt='social icons'/>
                <img src={instaIcon} alt='social icons'/>
                <img src={twitterIcon} alt='social icons'/>
            </div>
        </div>
    )
}