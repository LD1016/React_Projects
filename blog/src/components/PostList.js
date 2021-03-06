import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    // this.props.fetchPosts();
    this.props.fetchPostsAndUsers();
  }
  renderedList() {
    return this.props.posts.map((post) => {
      return (
        <div className='item' key={post.id}>
          <i className='large middle aligned icon user' />
          <div className='content'>
            <div className='description'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }
  render() {
    // console.log(this.props.posts);
    return <div className='ui relaxed divided list'>{this.renderedList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.postsReducer };
};

export default connect(mapStateToProps, {
  fetchPosts: fetchPosts,
  fetchPostsAndUsers: fetchPostsAndUsers,
})(PostList);
