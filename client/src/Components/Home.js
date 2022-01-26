import React from 'react'
import Image from './Images/img-1.jpg'

const Home = () => {
    return (
        <>
           <header class="body-section">
    <section class="container">
      <div class="row">
      <div class="col-sm-6">
        <div class="heading-div d-flex justify-content-sm-center align-items-sm-center flex-column-reverse gap-3 flex-md-row">
         <div class="headings d-flex justify-content-sm-center align-items-sm-center flex-column  justify-content-md-start align-items-md-start ">
          <h1>Hi there</h1>
          <h3>My name is Ibrar Ahmed</h3>
          <p class="pt-2">Iam graduate from shaikh ayaz university shikarpur department BS-IT and Iam Mernstack developer with 1 year experience of freelancing  my skills are Html Css Bootstrap Tailwind JavaScript Reactjs Expressjs Nodesjs Mongoose MongoDb  </p>

          <div class="hire__button d-flex justify-content-sm-center align-items-sm-center flex-column-reverse gap-3 flex-md-row">
            <button class="cv_btn btn btn-lg b-none mt-2">Check my cv</button>
          </div>
         </div>      
          
        </div>
      </div>
      <div class="col-sm-6">
        <div class="row">
          <div class="images w-100 h-100 justify-content-sm-center align-items-center mx-auto mt-5">
            <img src={Image} class="w-100 h-100 rounded-circle justify-content-sm-center align-items-center d-flex-column" alt=""/>
          </div>
        </div>
      </div>
    </div>
    </section>
  </header>
        </>
    )
}

export default Home
