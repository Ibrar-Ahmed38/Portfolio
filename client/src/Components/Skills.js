import React from 'react';

const Skills = () => {
  return <div>
        <section class="skill-section" data-bs-target="#Skills"> 
    <div class="container pt-5">
      <div class="row">
        <h1 class="text-center">Skills</h1>
        <hr class="bg-info mb-5"/>
        <div class="col-md-4">
            <div class="right-side">
              <div class="pb-5">
                <div class="heading d-flex">
                 <h3 class="">Html</h3>
                 <h5 class="align-items-end justify-content-end mx-auto pt-2">90%</h5>
                </div>
                 <div class="progress" style={{height:"10px"}}>
                   <div class="progress-bar bg-success" role="progressbar" style={{ width: "80%"}}></div>
                 </div>
               </div>

              <div class="pb-5">
                <div class="heading d-flex">
                 <h3 class="">Css</h3>
                 <h5 class="css-margin align-items-end justify-content-end mx-auto pt-2">90%</h5>
                </div>
                 <div class="progress" style={{height:"10px"}}>
                   <div class="progress-bar bg-success" role="progressbar" style={{ width: "80%"}}></div>
                 </div>
               </div>

              <div class="pb-5">
                <div class="heading d-flex">
                 <h3 class="">Bootstrap</h3>
                 <h5 class="align-items-end justify-content-end mx-auto pt-2">90%</h5>
                </div>
                 <div class="progress" style={{height:"10px"}}>
                   <div class="progress-bar bg-success" role="progressbar" style={{ width: "80%"}}></div>
                 </div>
               </div>

              <div class="pb-5">
                <div class="heading d-flex">
                 <h3 class="">Tailwind</h3>
                 <h5 class="align-items-end justify-content-end mx-auto pt-2">90%</h5>
                </div>
                 <div class="progress" style={{height:"10px"}}>
                   <div class="progress-bar bg-success" role="progressbar" style={{ width: "80%"}}></div>
                 </div>
               </div>
            </div>
        </div>
              {/* <!-- MiddleSide of Grid --> */}
        <div class="col-md-4">
          <div class="right-side">
            <div class="pb-5">
              <div class="heading d-flex">
               <h3 class="">Javascript</h3>
               <h5 class="align-items-end justify-content-end mx-auto pt-2">90%</h5>
              </div>
               <div class="progress" style={{height:"10px"}}>
                 <div class="progress-bar bg-success" role="progressbar" style={{ width: "80%"}}></div>
               </div>
             </div>

            <div class="pb-5">
              <div class="heading d-flex">
               <h3 class="">Reactjs</h3>
               <h5 class="align-items-end justify-content-end mx-auto pt-2">90%</h5>
              </div>
               <div class="progress" style={{height:"10px"}}>
                 <div class="progress-bar bg-success" role="progressbar" style={{ width: "80%"}}></div>
               </div>
             </div>

            <div class="pb-5">
              <div class="heading d-flex">
               <h3 class="">Expressjs</h3>
               <h5 class="align-items-end justify-content-end mx-auto pt-2">90%</h5>
              </div>
               <div class="progress" style={{height:"10px"}}>
                 <div class="progress-bar bg-success" role="progressbar" style={{ width: "80%"}}></div>
               </div>
             </div>

            <div class="pb-5">
              <div class="heading d-flex">
               <h3 class="">Nodesjs</h3>
               <h5 class="align-items-end justify-content-end mx-auto pt-2">90%</h5>
              </div>
               <div class="progress" style={{height:"10px"}}>
                 <div class="progress-bar bg-success" role="progressbar" style={{ width: "80%"}}></div>
               </div>
             </div>
          </div>
      </div>
          {/* LeftSide of Grid */}
      <div class="col-md-4">
        <div class="left-side">
          <div class="pb-5">
            <div class="heading d-flex">
             <h3 class="">Mongoose</h3>
             <h5 class="align-items-end justify-content-end mx-auto pt-2">90%</h5>
            </div>
             <div class="progress" style={{height:"10px"}}>
               <div class="progress-bar bg-success" role="progressbar" style={{ width: "80%"}}></div>
             </div>
           </div>

          <div class="pb-5">
           <div class="heading d-flex">
            <h3 class="">MongoDb</h3>
            <h5 class="align-items-end justify-content-end mx-auto pt-2">90%</h5>
           </div>
            <div class="progress" style={{height:"10px"}}>
              <div class="progress-bar bg-success" role="progressbar" style={{ width: "80%"}}></div>
            </div>
          </div>
        </div>
    </div>

      </div>  
      </div>
  </section>
   
  </div>;
};

export default Skills;
