import React, { Component } from 'react';
import { Link } from 'react-router-dom'
 
class Contact extends Component {
    render() {
        return (
		
<div id='mainContact'>

<h1 style={{paddingTop: '90px', paddingBottom: '30px', color: 'lightgray'}}>Contact Us</h1>
<div class="border"></div>

<div class="contact-info col-lg-6 contactDetails" >
				<h3 style={{margin: '2%', paddingTop: '5%', color: 'lightgray'}}>Contact Details</h3>
				<p style={{margin: '4%', fontSize: '20px', color: 'lightgray'}}>We would love the oppertunity to work with you on designing and implenting your next website or web-based service. We offer a proven track record with the customer testimonials and service awards that one should expect from a professional business partner.</p>
				<div class="contact-details">
					<div class="con-info clearfix">
						
						<span style={{fontSize: '17px', color: 'lightgray'}}> Kable Academy Web Development<br />Fall '22 Cohort</span>
					</div>
					<div class="con-info clearfix">
						
						<span style={{fontSize: '17px', color: 'lightgray'}}> 4901 Hunt Rd #200, Blue Ash, Ohio, USA</span>
					</div>

					<div class="con-info clearfix">
						
						<span style={{fontSize: '17px', color: 'lightgray'}}>Phone: (513) 881-2901</span>
					</div>

					<div class="con-info clearfix">
						
						<span style={{fontSize: '17px', color: 'lightgray'}}>Fax: 888-555-5556</span>
					</div>

					<div class="con-info clearfix">
						
						<span style={{fontSize: '17px', color: 'lightgray'}}>Email: info@kableacademy.com</span>
					</div>
				</div>
			</div>
<br /><br /><br />

<div class="contact-form col-lg-6 mt-4 mt-lg-0">
				<form id="contact-form" method="post" action="sendmail.php" role="form">

					<div class="form-group">
						<input type="text" placeholder="Your Name" class="form-control" name="name" id="name"/>
					</div>

					<div class="form-group">
						<input type="email" placeholder="Your Email" class="form-control" name="email" id="email"/>
					</div>

					<div class="form-group">
						<input type="text" placeholder="Subject" class="form-control" name="subject" id="subject"/>
					</div>

					<div class="form-group">
						<textarea rows="6" placeholder="Message" class="form-control" name="message" id="message"></textarea>
					</div>

					<div id="cf-submit">
						<input type="submit" id="contact-submit" class="btn btn-transparent" value="Submit" style={{color: 'white', fontSize: '25px'}} />
					</div>

				</form>
			</div>


<header id="navigation" class="navigation sticky">
  <div class="container">
    <div class="navbar-header w-100">
      <nav class="navbar navbar-expand-lg navbar-dark px-0">
      
        <div class="collapse navbar-collapse" id="navbar01">
          <ul class="navbar-nav navigation-menu ml-auto">
            <li class="nav-item" >
              <Link style={{color: '#262629'}} class="nav-link" href="/">Home</Link>
            </li>

            <li class="nav-item">
              <Link style={{color: '#262629'}} class="nav-link" href="/CultureHistory">Culture & History</Link>
            </li>
            <li class="nav-item">
              <Link style={{color: '#262629'}} class="nav-link" href="/Attractions">Attractions</Link>
            </li>
            <li class="nav-item">
              <Link style={{color: '#262629'}} class="nav-link" href="/Sports">Sport Venues</Link>
            </li>
            <li class="nav-item">
              <Link style={{color: '#262629'}} class="nav-link" href="/Contact">Contact</Link>
            </li>
            <li class="nav-item">
              <Link style={{color: '#262629'}} class="nav-link" href="/teamPage">Team</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  </header>

  
  <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
</div>
            );
    }
}
export default Contact;