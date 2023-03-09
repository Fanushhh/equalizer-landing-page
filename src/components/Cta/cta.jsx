import './cta.scss';

export default function Cta({phoneImg, title, description, price,period, iOS, android, iOSIcon, androidIcon}){
    return(
        <section className='cta'>
            <div className="backgroundCard">
                <img src={phoneImg} alt="phone image"/>
            </div>
            <div className="card">
                <h2>{title}</h2>
                <p className='cardDesc'>{description}</p>
                <div className="priceWrapper">
                    <span>{price}</span>
                    <p className='cardPrice'>{period}</p>
                    
                </div>
                <div className='buttonsContainer'>
                    <button className="appleBtn">
                    <img src={iOSIcon} alt='apple icon'/>
                    {iOS}
                    </button>
                    <button className="androidBtn">
                    <img src={androidIcon} alt='android icon' />
                    {android}</button>
                </div>
            </div>
        </section>
    )
}        