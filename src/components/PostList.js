import React from "react";
import { connect } from "react-redux";
import { getPosts } from "./../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  renderPost = () => {
    const { posts } = this.props;

    if (!posts) {
      return <>Loading...</>;
    }

    return posts.map(post => {
      return (
        <div key={post.id} className="ui segment divided list">
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
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { getPosts }
)(PostList);
