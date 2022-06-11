import React from 'react';
import DefaultLayout from 'src/domains/layout/DefaultLayout';
import PostDetail from 'src/domains/posts/detail/PostDetail';

const PostDetailPage = () => {
  return (
    <DefaultLayout>
      <PostDetail />
    </DefaultLayout>
  );
};

export default PostDetailPage;
