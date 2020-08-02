import React, { useEffect, useState } from 'react';

const Header2 = () => {
  const [data, setData] =useState({})

  const fetchImage = () => {
    fetch(`https://source.unsplash.com/1600x900/?nature,water`)
      .then(res => res.json())
      .then(data => setData(data))
  }

    useEffect(fetchImage, [data]);

  return(
     <header>
        <Header2 data={data} key={data.id} />
        <div className='name'>
          <h3>Hello, I am Yuuka Motobayashi and</h3>
          <h1>PMP, Soon-To-be Front End Web Developer</h1>
        </div>
      </header>
      
  )
}

export default Header2;
