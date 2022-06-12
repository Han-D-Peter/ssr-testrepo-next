import { useQuery } from 'react-query';
import PostDetailRepository from './PostDetail.repository';

export const usePostDetailQuery = (postId: string) =>
  useQuery(['PostDetail', postId], () => PostDetailRepository.getPost(postId), {
    enabled: !!postId,
  });
