
import { Link } from 'react-router-dom'
import Alexis from '../images/AlexisProfilePicture.jpg'
import Kirk from '../images/KirkProfilePicture111.png'
import Jason from '../images/teamSectionProfilePicture.jpg'

import React, { Component } from 'react'

export default class TeamPage extends Component {
  render() {
	return (
	<div id='mainTeam'>
		<section id="our-team" class="section text-center">
		<div className="container">
			<div className="row">
	
				<div className="col-lg-12">
					<div className="title text-center ">
						<h2 style={{margin: '3%', color: 'white'}}>Our <span class="color">Team</span></h2>
						<div className="border"></div>
					</div>
				</div>
    </div></div>
				<div className="container text-center" >
  <div className="row" style={{justifyContent:"center", margin:"auto"}}>
    <div className="card col-md-3 mx-2" style={{ marginTop: '10%', marginBottom: '10%',  backgroundColor: 'antiqueWhite'}}>
      
      <div className="container">
      <p></p>
		<img src={Alexis} height={300} width={300}  alt="Alexis"  style={{borderRadius: '50%', border: '3px solid #473636'}} className="img-fluid" />
        <h2>Alexis Flowers</h2>
        <p class="title">Web Developer</p>
        <p>Kable Academy <br /> Web Development <br /> Fall '22</p>
        <p>example@example.com</p>
        
      </div>
    </div>
  

  
    <div className="card col-md-3 mx-2" style={{ marginTop: '10%', marginBottom: '10%', backgroundColor: 'antiqueWhite'}}>
      
      <div className="container">
      <p></p>
	  <img src={Kirk} height={300} width={300}  alt="Kirk"  style={{borderRadius: '50%', border: '3px solid #473636'}} className="img-fluid" />
	  <h2>Kirk Springs</h2>
        <p className="title">Web Developer</p>
        <p>Kable Academy  <br />Web Development <br /> Fall '22</p>
        <p>Example@KableGroup.com</p>
        
      </div>
    </div>
  
    <div className="card col-md-3 mx-2" style={{ marginTop: '10%', marginBottom: '10%',  backgroundColor: 'antiqueWhite'}}>
      
      <div className="container">
      <p></p>
      <img src={Jason} height={300} width={300} alt="Jason" style={{borderRadius: '50%', border: '3px solid #473636'}} className="img-fluid" />
        <h2>Jason Donley</h2>
        <p className="title">Web-Developer/Designer</p>
        <p>Kable Academy  <br />Web Development <br /> Fall '22</p>
        <p>jay.donley@gmail.com</p>
        
      </div>
    </div>
  </div>
</div>




				
				
		


      
		</section>
    
    <header id="navigation" class="navigation sticky">
  <div class="container">
    <div class="navbar-header w-100">
      <nav class="navbar navbar-expand-lg navbar-dark px-0">
        
          
          
        
  
        <button style={{color: 'darkblue'}} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar01" 
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span  style={{color: 'darkblue'}}  class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbar01">
          <ul class="navbar-nav navigation-menu ml-auto">
            <li class="nav-item" >
              <Link style={{color: '#262629'}} class="nav-link" to="/">Home</Link>
            </li>

            <li class="nav-item">
              <Link style={{color: '#262629'}} class="nav-link" to="/CultureHistory">Culture & History</Link>
            </li>
            <li class="nav-item">
              <Link style={{color: '#262629'}} class="nav-link" to="/Attractions">Attractions</Link>
            </li>
            <li class="nav-item">
              <Link style={{color: '#262629'}} class="nav-link" to="/Sports">Sport Venues</Link>
            </li>
            <li class="nav-item">
              <Link style={{color: '#262629'}} class="nav-link" to="/Contact">Contact</Link>
            </li>
            <li class="nav-item">
              <Link style={{color: '#262629'}} class="nav-link" to="/teamPage">Team</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  </header>
    
    
    </div>

    
	
			

			
		

	)
  }
}
