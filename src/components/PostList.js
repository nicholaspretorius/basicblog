import React from "react";
import { connect } from "react-redux";
import { getSongs } from "./../actions";

class PostList extends React.Component {
  componentDidMount() {
    getSongs();
  }

  renderPost = () => {
    const { posts } = this.props;

    if (!posts) {
      return <>Loading...</>;
    }

    return posts.map(post => {
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
  return { posts: state.posts };
};

export default connect(mapStateToProps)(PostList);
