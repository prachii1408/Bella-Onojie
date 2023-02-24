import React from 'react'

const Home = () => {
  return (
    <>
     <div >
      <img src="images/food.png" className='img-fluid bg ' alt="food"></img>
      <div className="position-absolute overlay text-center">
      <div div className="row pt-5">
          <div className='text-center text-wrap col-md-6 mx-auto '>
             <h3 className="fw-semibold pb-4">Food App</h3>
            <h1 className='fw-bold pb-4 lh-base text-wrap font poppins'>Why stay hungry when you can order from Bella Onojie</h1>
            <h3 className='fw-light pb-5 text-wrap'>Download the bella onojie's food app now </h3>
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
    </div>
    <div className='home2'>
    <div className="clearfix d-flex justify-content-center mt-5">
    <img src="images/phone1.png" className='phone img-fluid ' alt="mobile"></img>
    <img src="images/phone2.png" className='phone mt-5 img-fluid ' alt="mobile"></img>
   
    </div>
    </div>
    <hr className='border-top my-0 mx-auto mt-5'></hr>
    <h2 className='text-black text-center mt-4 poppins'>How the app works</h2>

    </>
    
  )
}

export default Home
