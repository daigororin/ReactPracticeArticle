  
import React from 'react';
import LikeButton from './LikeButton'

const Article = (props) => {
  let publishState = "";
  if (props.isPublished) {
    publishState = "Published"
  } else {
    publishState = "NonPublished";
  }

  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor = "check">isChecked</label>
      <input type="checkbox" checked = {props.isPublished} 
      id = "check" onClick = {() => props.toggle()}
      />
      <LikeButton count = {props.count}/>
    </div>
  )
};
export default Article;