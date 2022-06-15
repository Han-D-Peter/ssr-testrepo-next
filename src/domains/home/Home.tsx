import { css } from '@emotion/react';
import React from 'react';
import { PostGrid } from '../shared/components/PostGrid';
import { useGetPostsQuery } from './Home.queries';

const Home = () => {
  const getPostsQuery = useGetPostsQuery();

  const postsMock = {
    content: [
      {
        postIdx: 1,
        title: 'server-side rendering',
        contents: 'server-side rendering 은 ~~',
        thumbnailImg: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
        thumbnailContents: 'server-side rendering 은',
        boardCount: 15,
        privated: 'N',
        dateTime: '2022-06-09 00:01:37',
        deleted: 'N',
      },
      {
        postIdx: 2,
        title: 'server-side rendering',
        contents: 'server-side rendering 은 ~~',
        thumbnailImg: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
        thumbnailContents: 'server-side rendering 은',
        boardCount: 15,
        privated: 'N',
        dateTime: '2022-06-09 00:01:37',
        deleted: 'N',
      },
      {
        postIdx: 3,
        title: 'server-side rendering',
        contents: 'server-side rendering 은 ~~',
        thumbnailImg: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
        thumbnailContents: 'server-side rendering 은',
        boardCount: 15,
        privated: 'N',
        dateTime: '2022-06-09 00:01:37',
        deleted: 'N',
      },
      {
        postIdx: 4,
        title: 'server-side rendering',
        contents: 'server-side rendering 은 ~~',
        thumbnailImg: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
        thumbnailContents: 'server-side rendering 은',
        boardCount: 15,
        privated: 'N',
        dateTime: '2022-06-09 00:01:37',
        deleted: 'N',
      },
      {
        postIdx: 5,
        title: 'server-side rendering',
        contents: 'server-side rendering 은 ~~',
        thumbnailImg: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
        thumbnailContents: 'server-side rendering 은',
        boardCount: 15,
        privated: 'N',
        dateTime: '2022-06-09 00:01:37',
        deleted: 'N',
      },
    ],
  };

  return (
    <div css={HomeGridLayout}>
      <PostGrid contents={postsMock.content} columnCounts={4} />
    </div>
  );
};

const HomeGridLayout = css`
  display: flex;
  justify-content: center;
  max-width: 1256px;
  margin-top: 131px;
  margin-left: auto;
  margin-right: auto;
`;

export default Home;
