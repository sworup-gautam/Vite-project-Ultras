import React from 'react'

const Contact = () => {
  return (
    <>
<section className="site-banner jarallax padding-large">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-title">Contact us</h1>
            <div className="breadcrumbs">
              <span className="item">
                <a href="index.html">Home /</a>
              </span>
              <span className="item">Contact us</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="contact-information padding-large">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-header">
              <h2 className="section-title">Get in touch</h2>
            </div>
            <div className="contact-detail">
              <div className="detail-list">
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <ul className="list-unstyled list-icon">
                  <li>
                    <a href="#"><i className="icon icon-phone"></i>+1650-243-0000</a>
                  </li>
                  <li>
                    <a href="mailto:info@yourcompany.com"><i className="icon icon-mail"></i>info@yourcompany.com</a>
                  </li>
                  <li>
                    <a href="#"><i className="icon icon-map-pin"></i>North Melbourne VIC 3051, Australia</a>
                  </li>
                </ul>
              </div>
              <div className="social-links">
                <h3>Social Links</h3>
                <ul className="d-flex list-unstyled">
                  <li><a href="#" className="icon icon-facebook"></a></li>
                  <li><a href="#" className="icon icon-twitter"></a></li>
                  <li><a href="#" className="icon icon-instagram"></a></li>
                  <li><a href="#" className="icon icon-youtube-play"></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-information">
              <div className="section-header">
                <h2 className="section-title">Send us a message</h2>
              </div>
              <form name="contactform" action="contact.php" method="post" className="contact-form">
  <div className="form-item">
    <input
      type="text"
      minLength="2"
      name="name"
      placeholder="Name"
      className="u-full-width bg-light"
      required
    />  
    <input
      type="email"
      name="email"
      placeholder="E-mail"
      className="u-full-width bg-light"
      required
    />
    <textarea
      className="u-full-width bg-light"
      name="message"
      placeholder="Message"
      style={{ height: '180px' }}
      required
    ></textarea>
  </div>
  <label>
    <input type="checkbox" required />
    <span className="label-body">
      I agree to all the <a href="#">terms and conditions</a>
    </span>
  </label>
  <button type="submit" name="submit" className="btn btn-dark btn-full btn-medium">
    Submit
  </button>
</form>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="google-map">
  <div
    className="mapouter"
    style={{
      position: 'relative',
      textAlign: 'right',
      height: '500px',
      width: '100%',
    }}
  >
    <div
      className="gmap_canvas"
      style={{
        overflow: 'hidden',
        background: 'none',
        height: '500px',
        width: '100%',
      }}
    >
      <iframe
        width="100%"
        height="500"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" 
        style={{
          border: 'none', // Replaces `frameBorder="0"`
          overflow: 'hidden', // Replaces `scrolling="no"`
          margin: '0', // Replaces `marginHeight="0"` and `marginWidth="0"`
        }}
        title="Google Map"
      ></iframe>
      <a href="https://getasearch.com/fmovies">fmovies</a>
    </div>
    <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
  </div>
</section>


    <section id="brand-collection" className="padding-medium bg-light-grey">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between">
          <img src="images/brand1.png" alt="phone" className="brand-image"/>
          <img src="images/brand2.png" alt="phone" className="brand-image"/>
          <img src="images/brand3.png" alt="phone" className="brand-image"/>
          <img src="images/brand4.png" alt="phone" className="brand-image"/>
          <img src="images/brand5.png" alt="phone" className="brand-image"/>
        </div>
      </div>
    </section>

    <section id="instagram" className="padding-large">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Follow our instagram</h2>
        </div>
        <p>Our official Instagram account <a href="#">@ultras</a> or <a href="#">#ultras_clothing</a>
        </p>
        <div className="row d-flex flex-wrap justify-content-between">
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src="images/insta-image1.jpg" alt="instagram" className="insta-image"/>
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src="images/insta-image2.jpg" alt="instagram" className="insta-image"/>
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src="images/insta-image3.jpg" alt="instagram" className="insta-image"/>
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src="images/insta-image4.jpg" alt="instagram" className="insta-image"/>
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src="images/insta-image5.jpg" alt="instagram" className="insta-image"/>
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src="images/insta-image6.jpg" alt="instagram" className="insta-image"/>
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
        </div>          
      </div>
    </section>

    <section id="shipping-information">
      <hr/>
      <div className="container">
        <div className="row d-flex flex-wrap align-items-center justify-content-between">
          <div className="col-md-3 col-sm-6">
            <div className="icon-box">
              <i className="icon icon-truck"></i>
              <h4 className="block-title">
                <strong>Free shipping</strong> Over $200
              </h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="icon-box">
              <i className="icon icon-return"></i>
              <h4 className="block-title">
                <strong>Money back</strong> Return within 7 days
              </h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="icon-box">
              <i className="icon icon-tags1"></i>
              <h4 className="block-title">
                <strong>Buy 4 get 5th</strong> 50% off
              </h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="icon-box">
              <i className="icon icon-help_outline"></i>
              <h4 className="block-title">
                <strong>Any questions?</strong> experts are ready
              </h4>
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </section>

   
</>
  )
}

export default Contact