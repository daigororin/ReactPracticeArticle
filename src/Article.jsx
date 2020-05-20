import React from 'react';

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
      <p>No:{props.order}</p>
      <p>author:{props.author}</p>
      <p>{publishState}</p>
    </div>
  )
};
export default Article;