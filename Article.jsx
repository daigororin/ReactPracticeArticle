import React, {useState} from 'react';
import LikeButton from './LikeButton'

const Article = (props) => {
  const[isPublished, togglePublished] = useState(false);
  // let publishState = "";
  // if (props.isPublished) {
  //   publishState = "Published"
  // } else {
  //   publishState = "NonPublished";
  // }
  const[LikeCount,setCount] = useState(0);

  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor = "check">isChecked</label>
      <input type="checkbox" checked = {isPublished} 
      id = "check" onClick = {() => togglePublished(!isPublished)}
      />
      <p>You liked: {LikeCount}times</p>
      <button onClick = {() => setCount(LikeCount +1)}>LIKE</button>
    </div>
  )
};
export default Article;