import React from 'react'

const Navbar = () => {
  return (
    
<nav className="navbar navbar-expand-lg sticky-top bg-white">
  <div className="container">
    <button className="navbar-brand anchor">
    <a href="/#"><img src="images/bella2.png" alt="logo" width="206" height="101"></img></a>
      
    </button>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <button className="nav-link active anchor red" id="orange" aria-current="page" ><a href="/#" className='text-decoration-none red '>Home</a></button>
        </li>
        <li className="nav-item">
          <button className="nav-link active anchor" aria-current="page"><a href="/#" className='text-decoration-none blue'>Product</a> </button>
        </li>
        <li className="nav-item">
          <button  className="nav-link active anchor" aria-current="page"><a href="/#" className='text-decoration-none blue '>Faq</a></button>
        </li>
        <li className="nav-item">
          <button  className="nav-link active anchor" aria-current="page" ><a href="/#Contact" className='text-decoration-none blue'>Contact</a></button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar;
