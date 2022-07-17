import React from 'react'
import "./featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
            <h1 className="tilte">Total Revenue</h1>
            <MoreVertIcon fontSize="small"/>
        </div>
        <div className="bot">
            <div className="featuredChart">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={2}/>
            </div>
        <p className="tilte">Total sale made today</p>
        <p className="amount">2607$</p>
        <p className="desc">Today is very bad day!!!!</p>
        </div>
       
    </div>
  )
}

export default Featured