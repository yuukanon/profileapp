import React from 'react';
import HSBar from "react-horizontal-stacked-bar-chart";



const Project = () => {
  return(
     <>
      <h1>My Project</h1>
      <div className="projectcontainer">
        <div className="homejourney">
          <img src=".public/Homejourney.png" alt="homejourney"></img>
          <p className="projectbox"><div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, qui?</div>
          <div><p>Language</p></div>
          <HSBar
        showTextIn
        data={[
          { value: 72,color: 'blue', description: '72%', name: 'HTML' }, 
          { value: 25,color: 'orange', description: '25%', name: 'CSS' },
          { value: 3, color: 'yellow', description: '3%', name: 'JS' }
        ]}
      />
    </p>
        </div>
        <div>
          
        </div>
      </div>
     </>
      
  )
}

export default Project;
