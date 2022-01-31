import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div id='Footer' >
        <section className="deneb_cta">
          <div className="container">
            <div className="cta_wrapper">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="cta_content">
                    <h3>Have Any Project in Mind ?</h3>
                    <p>Curabitur libero eros, efficitur sit amet sodales tincidunt, aliquet et leo sed ut nibh feugiat, auctor enim quis.</p>
                  </div>
                </div>
                <div className="col-lg-5">
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="deneb_footer">
          <div className="widget_wrapper" style={{backgroundImage: 'url(http://demo.tortoizthemes.com/deneb-html/deneb-ltr/assets/images/footer_bg.png)'}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="widget widegt_about">
                    <div className="widget_title">
                      <img src="assets/images/logo_1.png" className="img-fluid" alt="" />
                    </div>
                    <p>Quisque orci nisl, viverra et sem ac, tincidunt egestas massa. Morbi est arcu, hendrerit ac vehicula condimentum, euismod nec tortor praesent consequat urna.</p>
                    <ul className="social">
                      <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fab fa-twitter" /></a></li>
                      <li><a href="#"><i className="fab fa-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="widget widget_link">
                    <div className="widget_title">
                      <h4>Links</h4>
                    </div>
                    <ul>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Portfolio</a></li>
                      <li><a href="#">Blog</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="widget widget_contact">
                    <div className="widget_title">
                      <h4>Contact Us</h4>
                    </div>
                    <div className="contact_info">
                      <div className="single_info">
                        <div className="icon">
                          <i className="fas fa-phone-alt" />
                        </div>
                        <div className="info">
                          <p><a href="tel:+919246147999">1800-121-3637</a></p>
                          <p><a href="tel:+919246147999">+91 924-614-7999</a></p>
                        </div>
                      </div>
                      <div className="single_info">
                        <div className="icon">
                          <i className="fas fa-envelope" />
                        </div>
                        <div className="info">
                          <p><a href="mailto:info@deneb.com">info@deneb.com</a></p>
                          <p><a href="mailto:services@deneb.com">services@deneb.com</a></p>
                        </div>
                      </div>
                      <div className="single_info">
                        <div className="icon">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="info">
                          <p>125, Park street aven, Brocklyn,<span>Newyork.</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright_area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="copyright_text">
                    <p>Copyright © 2020 All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
}

export default Footer
