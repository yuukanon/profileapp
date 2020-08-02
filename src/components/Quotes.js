import React from 'react';

const Quotes = (props) => {
  const dailyQuote = (props.data.contents.quotes[0])

  // console.log(props.data.contents.quotes[0])
  // return (
  //   <div>Quote of the day: {props.data.contents.quotes[0]}</div>
    
  // )

  // const [dailyQuote, setDailyQuote] = useState([]);

  // // useEffect(() => setData(), [props])

  // useEffect(() => {
  //   fetch(`http://quotes.rest/qod.json?category=inspire`)
  //     .then(res => res.json())
  //     .then(data => setData(data))
  // }, [props]);

  // console.log(props)
  // const setData = () => {
  //   setDailyQuote(props.data)
  // }

  return (
    <div>Quotes of the day: {dailyQuote}</div>
  )
}


export default Quotes;