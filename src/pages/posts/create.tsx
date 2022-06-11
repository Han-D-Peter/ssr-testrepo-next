import React from 'react';
import PostCreate from 'src/domains/posts/create/PostCreate';
import DefaultLayout from 'src/domains/layout/DefaultLayout';

function PostCreatePage() {
  return (
    <DefaultLayout>
      <PostCreate />
    </DefaultLayout>
  );
}

export default PostCreatePage;
