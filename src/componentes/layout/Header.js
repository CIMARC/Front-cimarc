import React from 'react';


const Header = () => (
  <header id="header" >
    <div className="top-nav style-one" style={{ backgroundColor: '#03a7ff' }}>
      <div className="container flex-between h-44">
        <div className="left-block flex-item-center" >
          <div className="location flex-item-center" style={{ width: '100%'}}>
            <i class="fa-solid fa-location-dot" style={{color: 'white'}}></i>
            <span className="ml-8 caption1 text-white" 
             >Jr. La Mar 493, Barrio San Pedro, Cajamarca - Perú</span>
          </div>
          <div className="mail ml-28 flex-item-center" >
            <i class="fa-regular fa-envelope" style={{color: 'white'}}></i>
            <span className="ml-8 caption1 text-white"
              >centrointernacionalcimarc@gmail.com</span>
          </div>
        </div>
        <div className="right-block flex-item-center gap-20">
          <select className="border-none outline-none text-white pr-8 caption2" name="languge" style={{backgroundColor: '#03a7ff'}}>
            <option value="Espana">Español</option>
            <option value="English">English</option>
          </select>
          <div className="line h-24 w-1 bg-white"></div>
          <div className="list-social flex-item-center gap-10 style-one color-white">
            <a
              className="item bora-50 w-28 h-28 flex-center"
              href="https://www.facebook.com/centrointernacionalcimarc"
              target="_blank"
              rel="noopener noreferrer"
            ><i class="fa-brands fa-facebook" style={{color: 'white'}}></i>
            </a> 
            <a
              className="item bora-50 w-28 h-28 flex-center"
              href="https://www.linkedin.com/company/centro-internacional-cimarc/"
              target="_blank"
              rel="noopener noreferrer"
            ><i class="fa-brands fa-linkedin" style={{color: 'white'}} ></i>
            </a>
            <a
              className="item bora-50 w-28 h-28 flex-center"
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            ><i class="fa-brands fa-twitter" style={{color: 'white'}}></i>
            </a>
            <a
              className="item bora-50 w-28 h-28 flex-center"
              href="https://instagram.com/centro_internacional_cimarc"
              target="_blank"
              rel="noopener noreferrer"
            ><i class="fa-brands fa-instagram" style={{color: 'white'}}></i>
            </a>
            <a
              className="item bora-50 w-28 h-28 flex-center"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            ><i class="fa-brands fa-youtube" style={{color: 'white'}}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>

)

export default Header;