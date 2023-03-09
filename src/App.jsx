import './App.scss'
import Cta from './components/Cta/cta';
import Footer from './components/footer/footer';
import Hero from './components/Hero/hero';
import { data } from './data';
function App() {

  return (
    <main className="App">
      <Hero 
      logoImg={data.websiteLogo} 
      title={data.heroHeading}
      description={data.heroDescription}
      />  
      <Cta 
        phoneImg={data.phoneImg}
        title={data.cardTitle}
        description={data.cardDescription}
        price={data.cardPrice}
        period={data.period}
        iOS={data.iOSDownloadBtn}
        iOSIcon={data.appleIcon}
        android={data.androidDownloadBtn}
        androidIcon={data.androidIcon}
      />   
      <Footer 
        logo={data.websiteLogo}
        copyright={data.copyright}
        question={data.cta}
        fbIcon={data.facebookIcon}
        instaIcon={data.instaIcon}
        twitterIcon={data.twitterIcon}
        email={data.email}
      />  
    </main>
    
  )
}

export default App;
