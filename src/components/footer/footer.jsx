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
                <img src={fbIcon} />
                <img src={instaIcon} />
                <img src={twitterIcon} />
            </div>
        </div>
    )
}