import { css } from '@emotion/react';
import Router from 'next/router';
import React from 'react';
import { useGetPostsQuery } from './Home.queries';

const Home = () => {
  const getPostsQuery = useGetPostsQuery();

  return (
    <div>
      {getPostsQuery.data?.content.map((post) => (
        <div
          css={postWrapperStyle}
          key={post.postIdx}
          onClick={() => {
            Router.push(
              {
                pathname: `/posts/[postIdx]`,
                query: {
                  postIdx: `${post.postIdx}`,
                },
              },
              `/posts/${post.postIdx}`,
            );
          }}
        >
          <div>title: {post.title}</div>
          <div>contents: {post.thumbnailContents}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;

const postWrapperStyle = css`
  border: 1px solid white;
  color: white;
  cursor: pointer;
`;
