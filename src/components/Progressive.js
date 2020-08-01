import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
 
const ProgressCircle = ({percentage}) => {
    return(
    

        <CircularProgressbar value={percentage} text={`${percentage}%`} />
    )
}

export default ProgressCircle;