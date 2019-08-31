import React from "react";
import { connect } from "react-redux";
import { getPosts } from "./../actions";

class PostList extends React.Component {
  constructor() {
    super();
    this.posts = null;
  }
  componentDidMount() {
    this.posts = this.props.getPosts();
  }

  renderPost = () => {
    // const posts = this.props.getPosts();

    if (!this.posts) {
      return <>Loading...</>;
    }

    return this.posts.map(post => {
      return (
        <div key={post.id}>
          <h4>{post.title}</h4>
        </div>
      );
    });
  };

  render() {
    const postList = this.renderPost();
    return <div>{postList}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { posts: state.getPosts };
};

export default connect(
  mapStateToProps,
  { getPosts }
)(PostList);
