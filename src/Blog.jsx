import React from 'react';
import Article from './Article';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false
    }
  }

  togglePublished = () => {
    this.setState ( {
      isPublished: !this.state.isPublished
    })
  };

  render() {
    const authorName = "daigororin"
    return (
      <div>
        <Article title = {'HowToUseReact'}
         isPublished = {this.state.isPublished}
         toggle = {() => this.togglePublished()}
         />
      </div>

    )
  }
}

export default Blog;