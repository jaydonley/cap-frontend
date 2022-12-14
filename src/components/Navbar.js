import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'; 



// class navbar extends Component {
//     render() {
//         return (

// <header id="navigation" class="navigation">
//   <div class="container">
//     <div class="navbar-header w-100">
//       <nav class="navbar navbar-expand-lg navbar-dark px-0">
//         <Link class="navbar-brand logo" to="/">
//           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Seal_of_the_City_of_Cincinnati_%28Ohio%29.png/1200px-Seal_of_the_City_of_Cincinnati_%28Ohio%29.png"  id="logoSize"  alt="Seal of Cincinnati" height={100}/>
//           </Link>
          
          
        
  
//         <button style={{color: 'darkblue'}} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar01" 
//           aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span  style={{color: 'darkblue'}}  class="navbar-toggler-icon"></span>
//         </button>
  
//         <div class="collapse navbar-collapse" id="navbar01">
//           <ul class="navbar-nav navigation-menu ml-auto">
//             <li class="nav-item" >
//               <Link style={{color: '#262629'}} class="nav-link" to="/">Home</Link>
//             </li>

//             <li class="nav-item">
//               <Link style={{color: '#262629'}} class="nav-link" to="/CultureHistory">Culture & History</Link>
//             </li>
//             <li class="nav-item">
//               <Link style={{color: '#262629'}} class="nav-link" to="/Attractions">Attractions</Link>
//             </li>
//             <li class="nav-item">
//               <Link style={{color: '#262629'}} class="nav-link" to="/Sports">Sport Venues</Link>
//             </li>
//             <li class="nav-item">
//               <Link style={{color: '#262629'}} class="nav-link" to="/Contact">Contact</Link>
//             </li>
//             <li class="nav-item">
//               <Link style={{color: '#262629'}} class="nav-link" to="/teamPage">Team</Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   </div>
//   </header>

//             );
//     }
// }
// export default navbar;







function navbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand  to="/"></Navbar.Brand>          
        <Link to="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Seal_of_the_City_of_Cincinnati_%28Ohio%29.png/1200px-Seal_of_the_City_of_Cincinnati_%28Ohio%29.png"  id="logoSize"  alt="Seal of Cincinnati" height={100}/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

           


            <Link style={{marginTop: '40px', marginRight: '35px', marginLeft: '20px'}} to="/">Home</Link>
            <Link style={{marginTop: '40px', marginRight: '35px'}} to="/CultureHistory">Culture & History</Link>
            <Link style={{marginTop: '40px', marginRight: '35px'}} to="/Attractions">Attractions</Link>
            <Link style={{marginTop: '40px', marginRight: '35px'}} to="/Sports">Sports Venues</Link>
            <Link style={{marginTop: '40px', marginRight: '35px'}} to="/Contact">Contact Us</Link>
            <Link style={{marginTop: '40px', marginRight: '35px'}} to="/teamPage">Our Team</Link>
            
             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;