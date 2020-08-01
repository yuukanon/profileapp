import React from 'react';
import ProgressCircle from './Progressive'

const SkillCard = ({ skill, level, since, summary, percentage }) => {
  return (
    <div className="skillcard">
      <div><ProgressCircle percentage={percentage} /></div>
      <p>{skill}</p>
      <p>{level}</p>
      <p>{since}</p>
    </div>
  )
}

export default SkillCard;