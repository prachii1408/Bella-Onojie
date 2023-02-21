import React from 'react'

const Navbar = () => {
  return (
    
<nav className="navbar navbar-expand-lg sticky-top bg-white">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src="images/bella2.png" alt="logo" width="206" height="101"></img>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" id="orange" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Faq</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar;
