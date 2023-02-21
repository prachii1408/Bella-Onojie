import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='min-vw-100 footer img-fluid bg mt-5 '>
    <div className="mask d-flex align-items-center">
    <div className="text-center mx-auto text-wrap">
    <h1 className='text-white fw-bold pb-5 '>Download the app now</h1>
    <h3 className='fw-normal text-white d-none d-md-block pb-4'>Available on your favourite store.Start your premium experience now</h3>
    <h3 className='fw-normal text-white d-md-none pb-4'>Most calendars are designed for teams</h3>
    <div className="row">
             <div className='col-md-6 pe-3 end'>
              <button type="button" className="btn btn-dark btn-lg ">Playstore</button>
             </div>
             <div className='col-md-6 ps-3 start'>
              <button type="button" className="btn btn-outline-light btn-lg ">Appstore</button>
             </div>
         </div>
    </div>
    </div>  
    </div>
    <div className="contact">
    <div className=" row contact">
     <div className="col-md-4 d-none d-md-block my-auto">
        <img src="images/bella2.png"  width="206" height="101"alt="icon" />
     </div>
     <div className="col-md-4 text-center my-auto d-flex justify-content-evenly">
     <i className="fa-brands fa-twitter fa-2xl"></i>
     <i className="fa-brands fa-square-facebook fa-2xl"></i>
     <i className="fa-brands fa-instagram fa-2xl"></i>

     </div>
     <div className="col-md-4 my-auto">
        <h6 className='end d-none d-md-block'>Copyright 2020 Bella onojie.com</h6>
        <h6 className='d-md-none text-center'>Just type what's on your mind and we'll</h6>
     </div>
    </div>
    </div>
    
    </>
    
  )
}

export default Footer
