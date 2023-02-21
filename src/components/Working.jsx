import React from 'react'

const Working = (props) => {
       var n=props.content.index;
        if(n%2){
            return(
                <div className='container mt-5'>
    <div className="row ">
      <div className="col-md-6 d-flex">
      <div className="text my-auto mx-auto">
        <h3 className='red'>{props.content.title}</h3>
        <h2 className='text-black lh-base'>{props.content.description}</h2>
        <h4 className='lh-base'>{props.content.result}</h4>
      </div>
      </div>
      <div className="col-md-6 d-flex justify-content-center">
        <img src={props.content.image} className="size img-fluid mx-auto" alt={props.content.title} />
      </div>
    </div>
    </div>
            );
        }
        else{
            return(
                <div className='container mt-5'>
                <div className="row flex-column-reverse flex-md-row">
                <div className="col-md-6 d-flex justify-content-center">
                    <img src={props.content.image} className="size img-fluid " alt={props.content.title} />
                  </div>
                  <div className="col-md-6 d-flex">
                  <div className="text my-auto">
                    <h3 className='red'>{props.content.title}</h3>
                    <h2 className='text-black lh-base'>{props.content.description}</h2>
                    <h4 className='lh-base'>{props.content.result}</h4>
                  </div>
                  </div>
                </div>
                </div>
            );
        }
    

}

export default Working;
