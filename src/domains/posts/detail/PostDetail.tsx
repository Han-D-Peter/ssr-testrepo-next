import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import React from 'react';
import { Text, Viewer } from 'src/domains/shared/components';
import { usePostDetailQuery } from './PostDetail.queries';

const PostDetail = () => {
  const { query } = useRouter();
  // TODO: SSR 처리 필요
  const postDetailQuery = usePostDetailQuery(query.postIdx as string);

  return (
    <section css={postDetailSection}>
      <Text type="title28" color="White100">
        {postDetailQuery.data?.title}
      </Text>
      {postDetailQuery.data && <Viewer initialValue={postDetailQuery.data.contents} />}
    </section>
  );
};

export default PostDetail;

const postDetailSection = css`
  margin: 83px 0px;
  overflow-y: auto;
`;
