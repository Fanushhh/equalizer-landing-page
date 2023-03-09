import './hero.scss';


export default function Hero({logoImg, title, description}){
    return(
        <section className='heroContainer'>
            <div className='logo'>
                <img srcSet={logoImg} src={logoImg} alt='logo image'/>
            </div>
            <div className='description'>
                <h1 className='cardHeading'>{title}</h1>
                <p className='cardDescription'>{description}</p>
            </div>
        </section>
    )
}