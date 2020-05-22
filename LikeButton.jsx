import React,  { useState, useEffect} from "react"


const LikeButton = () => {
  const [count,counter] = useState(0);

  const countUp = () => {
    counter(count + 1);
  }
  useEffect(() => {
    document.getElementById('Counter').addEventListener('click' , countUp)
    if(count >= 10){
      counter(0);
    }
    return () => {
    document.getElementById('Counter').removeEventListener('click' , countUp)
    }
  });

  return(
    <button id='Counter'>Likes:{count}</button>
  )

}

export default LikeButton