import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const authorName = "daigororin"
    return (
      <div>
        <Article title = {'HowToUseReact'}/>
        <Article title = {'HowToUseJSX'}/>
        <Article title = {'HowToUseVSCode'}/>
      </div>

    )
  }
}

export default Blog;