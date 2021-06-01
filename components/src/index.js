import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <div>
          <h3>Warning!</h3>
          <p>Are you sure you want to do this?</p>
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.image()}
          author='Sam'
          timeAgo='Today at 2:00PM'
          content='Nice blog post!'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.image()}
          author='Alex'
          timeAgo='Today at 10:00AM'
          content='Great Stuff!'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.image()}
          author='Peter'
          timeAgo='Yesterday at 4:05PM'
          content='Valueable info!'
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
