import React from "react";
import { connect } from "react-redux";

import { getPosts, getPostsAndUsers } from "./../actions";
import PostAuthor from "./PostAuthor";

class PostList extends React.Component {
  componentDidMount() {
    // this.props.getPosts();
    this.props.getPostsAndUsers();
  }

  renderPost = () => {
    const { posts } = this.props;

    if (!posts) {
      return <>Loading...</>;
    }

    return posts.map(post => {
      return (
        <div key={post.id} className="item">
          <i className="large middle aligned icon user"></i>
          <div className="content">
            <div className="description">
              <h4>{post.title}</h4>
              <PostAuthor userId={post.userId} />
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    const postList = this.renderPost();
    return <div className="ui relaxed divided list">{postList}</div>;
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { getPosts, getPostsAndUsers }
)(PostList);
