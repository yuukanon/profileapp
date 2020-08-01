import React from 'react';

const Quotes = (props) => {
  console.log(props.data.contents.quotes[0])
  return (
    <div>Quote of the day: {props.data.quotes}</div>
    
  )
}

export default Quotes;