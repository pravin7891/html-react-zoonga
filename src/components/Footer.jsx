import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
              <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-3 cont-drop">
          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Dropdown
            <span className="caret"></span>
          </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>
        </div>
        <div className="col-sm-9 home-newsletter">
          <div className="row">
            <div className="col-sm-5 news-subs-txt">
              <h3>Subscribe to our Newsletter</h3>
            </div>
            <div className="col-sm-7">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Enter your email"/>
                <span className="input-group-btn">
                 <button className="btn btn-theme" type="submit">Subscribe</button>
                 </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row footer-links">
        <div className="col-sm-3">
          <h6>Help</h6>
          <ul>
            <li><a href="#">24x7 Customer Service</a></li>
            <li><a href="#">Regenerate your PAH e-Ticket</a></li>
            <li><a href="#">Reprint Confirmation</a></li>
            <li><a href="#">Regenerate-e-Ticket</a></li>
            <li><a href="#">Track Courier</a></li>
          </ul>
        </div>
        <div className="col-sm-3">
          <h6>Company</h6>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Media Center</a></li>
            <li><a href="#">Policies</a></li>
          </ul>
        </div>
        <div className="col-sm-3">
          <h6>Popular Events</h6>
          <ul>
            <li><a href="#">EsselWorld</a></li>
            <li><a href="#">KidZania</a></li>
            <li><a href="#">Water Kingdom</a></li>
            <li><a href="#">Water Kingdom</a></li>
            <li><a href="#">Adventure Park</a></li>
            <li><a href="#">Vineyard Tour & Cycling</a></li>
          </ul>
        </div>
        <div className="col-sm-3 country-flag-sec">
          <h6>Popular Events</h6>
          <ul>
            <li><a href="http://www.kyazoonga.com.au/" target="_blank"><img src="images/CountriesFlag/aus.png"/>Australia</a></li>
            <li><a href="http://www.kyazoonga.com/" target="_blank"><img src="images/CountriesFlag/ind.png"/>India</a></li>
            <li><a href="http://www.kyazoonga.ie/" target="_blank"><img src="images/CountriesFlag/ireland.png"/>Ireland</a></li>
            <li><a href="http://www.kyazoonga.ae/" target="_blank"><img src="images/CountriesFlag/uae.png"/>United Arab Emirates</a></li>
            <li><a href="http://www.kyazoonga.com/" target="_blank"><img src="images/CountriesFlag/usa.png"/>United States</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-social text-center">
        <h6>Follow Us</h6>
        <ul>
          <li><a className="f" href="https://www.facebook.com/kyazoonga" target="blank" rel="me">
            <img src="images/facebook.png" alt="Facebook" width="32" height="32"/></a></li>
          <li><a className="t" href="https://twitter.com/kyazoonga" target="blank" rel="me">
            <img src="images/twitter.png" alt="Twitter" width="32" height="32"/></a></li>
          <li><a className="ig" href="https://www.instagram.com/kyazoonga/" target="blank" rel="me">
            <img src="images/instagram.png" alt="in" width="32" height="32"/></a></li>
          <li><a className="sc" href="https://www.snapchat.com/add/kyazoonga" target="blank" rel="me">
            <img src="images/snapchat.png" alt="in" width="32" height="32"/></a></li>
          <li><a className="in" href="https://www.linkedin.com/company/kyazoonga" target="blank" rel="me">
            <img src="images/in.png" alt="Linkedin" width="32" height="32"/></a></li>
          <li><a className="yt" href="https://www.youtube.com/user/kyazoongachannel" target="blank" rel="me">
            <img src="images/youtube.png" alt="Youtube" width="32" height="32"/></a></li>
          <li><a className="g" href="https://plus.google.com/+kyazoongachannel" target="blank" rel="me">
            <img src="images/google.png" alt="Google Plus" width="32" height="32"/></a></li>
          <li><a className="p" href="https://www.pinterest.com/kyazoonga/" target="blank" rel="me">
            <img src="images/pinterest.png" alt="Pinterest" width="32" height="32"/></a></li>
        </ul>
        <p className="copy-txt">Copyright Â©Kyazoonga. All rights reserved. </p>
      </div>

    </div>
  </footer>
        </React.Fragment>);
    }
}
 
export default Footer;