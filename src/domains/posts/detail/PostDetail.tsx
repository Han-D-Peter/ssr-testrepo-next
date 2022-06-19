import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Spacing, Text, Viewer, CommentList, CommentProps } from 'src/domains/shared/components';
import { usePostDetailQuery } from './PostDetail.queries';

const PostDetail = () => {
  const { query } = useRouter();
  // TODO: SSR 처리 필요
  const postDetailQuery = usePostDetailQuery(query.postIdx as string);
  const [commentList, setCommentList] = useState(COMMENTS_LIST);
  const [isLoadMore, setIsLoadMore] = useState(true);

  return (
    <section css={postDetailSection}>
      <Text type="title28" color="White100">
        {postDetailQuery.data?.title}
      </Text>
      {postDetailQuery.data && <Viewer initialValue={postDetailQuery.data.contents} />}

      <Spacing col={117} />

      <CommentList
        totalCounts={6}
        isLoadMore={isLoadMore}
        comments={commentList}
        onLoadMore={() => {
          if (isLoadMore) {
            setCommentList((prev) => [...prev, ...NEXT_COMMENT]);
            setIsLoadMore(false);
          }
        }}
      />
    </section>
  );
};

export default PostDetail;

const postDetailSection = css`
  margin: 83px 0px;
  overflow-y: auto;
`;

const COMMENTS_LIST: CommentProps[] = [
  {
    id: 1,
    author: '문건우',
    avatar: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
    contents: '호에에에엥',
  },
  {
    id: 2,
    author: '한재성',
    avatar: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
    contents: '프론트엔드개발자',
  },
  {
    id: 3,
    author: '김병수',
    avatar: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
    contents: '백엔드 개발자',
  },
  {
    id: 4,
    author: '전준익',
    avatar: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
    contents: '백엔드 개발자아아',
  },
];

const NEXT_COMMENT: CommentProps[] = [
  {
    id: 5,
    author: '민현경',
    avatar: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
    contents: '디자이너',
  },
  {
    id: 6,
    author: '윤지혜',
    avatar: 'http://upload2.inven.co.kr/upload/2019/12/27/bbs/i14210693079.jpg',
    contents: '디자이너어어어',
  },
];
