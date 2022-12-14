import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import reds from "../images/reds.png"
import findlay_facts from "../images/findlay facts.png"
import findlay_market from "../images/findlay market.jpg"
import chili_1920 from "../images/chili_1920.webp"
import chili_facts from "../images/chili facts.png"
import download from "../images/download.jpg"
import rob_bridge from "../images/rob bridge words.png"
import roebling from "../images/Roebling_Suspension_Bridge.jpg"
import uc_facts from "../images/uc_facts.png"
import union_terminal_facts from "../images/union terminal facts.png"
import union_terminal from "../images/union_terminal.jpeg"
import university from "../images/University_of_Cincinnati_(LC).jpg"
 

class CultureHistory extends Component {
    render() {
        return (
      
    <section id="services" class="bg-one section">
    <div class="container">
      <div class="row">
  
        <div class="col-lg-12">
          <div class="title text-center wow fadeIn" data-wow-duration="500ms">
            <h2 style={{ color: 'white' }}>Culture & <span class="color">History</span></h2>
            <div class="border"></div>
          </div>
        </div>
  
  <div class="row">
    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
      <img
       class="img-fluid" src={roebling} alt="bridge"/>
  
    <img
       class="img-fluid" src={rob_bridge} alt="bridge facts"
      />
    </div>
  
    <div class="col-lg-4 mb-4 mb-lg-0">
      <img
      class="img-fluid" src={union_terminal} alt="ut"
      />
      <img
      class="img-fluid" src={union_terminal_facts} alt="ut facts"
      />
    </div>
  
    <div class="col-lg-4 mb-4 mb-lg-0">
      <img
      class="img-fluid" src={download} alt="reds"
      />
      <img
      class="img-fluid" src={reds} alt="reds facts"
      />
  </div>
  </div>
  <div class="row">
    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
      <img
      class="img-fluid" src={chili_1920} alt="chilli"
      />
      <img
      class="img-fluid" src={chili_facts} alt="chilli facts"
      />
    </div>
    <div class="col-lg-4 mb-4 mb-lg-0">
      <img
      class="img-fluid" src={findlay_market} alt="findlay"
      />
      <img
      class="img-fluid" src={findlay_facts} alt="findlay facts"
      />
    </div>
    <div class="col-lg-4 mb-4 mb-lg-0">
      <img
      class="img-fluid" src={university} alt="uc"
      />
      <img
      class="img-fluid" src={uc_facts} alt="uc facts"

      />
        </div>
        </div>
        </div>
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



        </section>
            );
    }
} 
 export default CultureHistory;