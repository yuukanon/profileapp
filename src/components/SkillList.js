import React from 'react';
import SkillCard from './Skillcard';

const SkillList = (props) => {
  return(
     <>
      <h1>Skills</h1>
      <div className="skillcontainer">
        {
          props.list.map (
            eachList => <SkillCard {...eachList} key={eachList.skill} />
          )
        }
      </div>
     </>
      
     
  )
}

export default SkillList;
