import styled from '@emotion/styled';
import { PostCard } from '../PostCard';
import { PostGridProps } from './PostGridType';

const PostGrid = ({ contents, columnCounts = 3 }: PostGridProps) => {
  return (
    <PostWrapperStyle columnsCounts={columnCounts}>
      {/* {getPostsQuery.data?.content.map((post) => ( */}
      {contents.map((post) => (
        <PostCard key={post.postIdx} data={post} />
      ))}
    </PostWrapperStyle>
  );
};

const PostWrapperStyle = styled.div<{ columnsCounts: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columnsCounts}, 1fr);
  gap: auto;
`;

export default PostGrid;
