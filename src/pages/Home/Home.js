import React from "react";
import Product from "../../components/Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home_row">
        <Product
						id='12321341'
						title='Lacoste Mens Lerond Bl 1 Fashion Sneaker'
						price={69.99}
						rating={5}
						image="https://canary.contestimg.wish.com/api/webimage/5a26818b325cf4599244a270-large.jpg?cache_buster=a701abec6be74ac35d816c5ca6dbe78a"
					/>
					<Product
						id='12311215'
						title='Razor A Kick Scooter'
						price={29.98}
						rating={4}
						image="https://target.scene7.com/is/image/Target/GUEST_60cd47ff-1c76-4b30-92dc-95854f3b5320?wid=325&hei=325&qlt=80&fmt=webp"
					/>
        </div>
        <div className="home_row">
        <Product
						id='12321'
						title='3D Printer Dual Extruder Sturdy Frame WiFi Touch Screen'
						price={599.99}
						rating={4}
						image="https://cdn.shopify.com/s/files/1/1082/9708/products/Screen_Shot_2019-01-31_at_1.58.14_PM_1024x1024@2x.png?v=1548961963"
					/>
					<Product
						id='12321'
						title='Logitech G602 Lag-Free Wireless Gaming Mouse – 11 Programmable Buttons'
						price={199.99}
						rating={4}
						image='https://images-na.ssl-images-amazon.com/images/I/81ZQgWwuVzL._AC_SY741_.jpg'
					/>
					<Product
						id='12321'
						title='Samsung 860 EVO 500GB 2.5 Inch SATA III Internal SSD (MZ-76E500B/AM)'
						price={189.99}
						rating={3}
						image='https://images-na.ssl-images-amazon.com/images/I/814poe%2BIDsL._AC_SX679_.jpg'
					/>
        </div>
        <div className="home_row">
        <Product
						id='12311216'
						title='Microsoft Xbox One X 1TB, 4K Ultra HD Gaming Console, Black (Renewed) (2017 Model)'
						price={299.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41cPBcgi7cL.jpg"
					/>
        </div>
      </div>
    </div>
  );
}

export default Home;
