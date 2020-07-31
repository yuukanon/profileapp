import React from 'react';

const SkillCard = ({ skill, level, since, summary }) => {
  return (
    <div className="skillcard">
      <p>{skill}</p>
      <p>{level}</p>
      <p>{since}</p>
      <p>{summary}</p>
    </div>
  )
}

export default SkillCard;