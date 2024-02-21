import React from "react";

import { global } from 'styled-jsx/css'


const Foot = () => { 
  return (
  <>
  
  <footer className="footer overflow-hidden">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Trending</h4>
  	 			<ul>
				   <li><a href="/Rishikesh_trend">Rishikesh</a></li>
  	 				<li><a href="/TrendChardham">Chardham</a></li>
  	 				<li><a href="/Chopta">Chopta</a></li>
  	 				<li><a href="/Tnainital">Nainital</a></li>
  	 				<li><a href="/Jimcorbet">Jim Corbet</a></li>
					   <li><a href="/TrendKedarnath">Kedarnath</a></li>
					   <li><a href="/TrendHaridwar">Haridwar</a></li>
					   <li><a href="/Mussoorie">Mussoorie</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Trip by trip</h4>
  	 			<ul>
				   <li><a href="">Backpacking</a></li>
  	 				<li><a href="#">Trekking</a></li>
  	 				<li><a href="#">Bike Trip</a></li>
  	 				<li><a href="#">Weekend Gateway</a></li>
					   <li><a href="#">Camping</a></li>
					   <li><a href="#">Jungle Safari</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Company</h4>
  	 			<ul>
				   <li><a href="/About">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="/Privacy">privacy policy</a></li>
  	 				<li><a href="/Terms">terms and conditions</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="https://wa.me/7417013033">

						<img
						src="whatsapp.svg"
						alt="whatsapp"
						width="60"
						height="60"
						/>
					</a>
  	 				<a href="https://www.instagram.com/parad_iseuttarakhand/">
					   <img
						src="instagram.svg"
						alt="whatsapp"
						width="60"
						height="60"
						/>
					</a>
  	 				<a href="https://www.facebook.com/profile.php?id=100091728108400&mibextid=ZbWKwL">
					   <img
						src="facebook.svg"
						alt="whatsapp"
						width="60"
						height="60"
						/>
					</a>
  	 				<a href="mailto:Info@paradiseuttarakhand.com">
					   <img
						src="gmail.svg"
						alt="whatsapp"
						width="60"
						height="60"
						/>
					</a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  </>
  )
}

export default Foot