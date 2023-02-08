import React from 'react';
import './Home.css';
import ImageCorosoul from './ImageCorosoul';
import Slider from "react-slick";
import Product from './Product';
function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <ImageCorosoul />
          {/* <img src="https://m.media-amazon.com/images/I/71usv3CIbTL._SX3000_.jpg" alt="" className='home_image'/> */}

        <div className="home__row">
          <Product
            id="1"
            title="Bluetooth Calling Smartwatch"
            price={1300}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"
            rating={4} />
          <Product
            id="2"
            title="OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 Mm Drivers, 10 Mins Charge - 20..."
            price={1799}
            image="https://m.media-amazon.com/images/I/51UhwaQXCpL._AC_UL320_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Samsung 253L 3 Star Inverter Frost Free Double Door Refrigerator (RT28T3743S8/HL, Silver, Elegant Inox, Convertible, 2022 Model)"
            price={24990}
            image="https://m.media-amazon.com/images/I/61m9iGtuS2L._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="Bangalore Refinery
            24k (999.9) 2 gm Yellow Gold Bar"
            price={12512}
            image="https://m.media-amazon.com/images/I/41tVpYCktyL._AC_SR400,600_.jpg"
            rating={4}
          />
          <Product 
            id="5"
            title="Apple 2022 iPad Air M1 Chip (10.9-inch/27.69 cm, Wi-Fi,..."
            price={53900}
            image="https://m.media-amazon.com/images/I/41L1Fw2xgOL._AC_SR400,600_.jpg"
            rating={5}
          />

        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Hershey's Cocoa Powder, 225g"
            price={253}
            image="https://m.media-amazon.com/images/I/41ybl9V5+YL._AC_SR400,600_.jpg"
            rating={4}
           />
          <Product
            id="7"
            title="Hershey's Cocoa Powder, 225gWecool Moonwalk M4 ENC Gaming Earbuds, 48 Hours Playtime, Dedicated Gaming Mode, Deep Bass, 55 ms Low..."
            price={1299}
            image="https://m.media-amazon.com/images/I/61kRf98tv6L._AC_UL320_.jpg"
            rating={4}
           />

        </div>
      </div>
    </div>
  );
}

export default Home;