import React from 'react';
import ProgressCircle from './Progressive'

const SkillCard = ({ skill, level, since, summary, percentage }) => {
  return (
    <div className="skillcard">
      <p>{skill}</p>
      <p>{level}</p>
      <p>{since}</p>
      <p>{summary}</p>
    <div><ProgressCircle percentage={percentage} /></div>
    </div>
  )
}

export default SkillCard;