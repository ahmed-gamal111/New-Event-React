import OurProgram from './comonents/OurProgram/OurProgram';
import OurSponser from './comonents/OurSponser/OurSponser';
import Overview from './comonents/Overview'
import overviewData from './comonents/Overview/overviewData';
import Speaker from './comonents/Speaker';
import AboutUs from './Home/component/About Us/aboutUs';
import Header from './Home/component/Header/header';
import Navbar from './Home/component/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'
import {BrowserRouter , Route , Routes} from "react-router-dom"
import Watch from './Home/component/WatchVedio/Watch';
import RegisterPage from './Home/component/Register/RegisterPage';
import According from './Home/component/According/According';
import Venue from './Home/component/Venue/Venue';
import ContactUs from './Home/component/ContactUs/ContactUs';
import Footer from './Home/component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <>
    <div>
    <Header />
    <AboutUs />
    </div>
      <div  style={{ display: "flex",justifyContent: "center" }}>
        {overviewData.map(item => (
          <Overview
            icon={item.icon}
            title={item.title}
            description={item.description}
            key={item.id}  
          />
        ))}
      </div>
          <Watch />
          <Speaker />
          <OurProgram />
          <RegisterPage />
          <According />
          <Venue />
          <OurSponser />
          <ContactUs />
          <Footer />
    </>
  );
}

export default App;
