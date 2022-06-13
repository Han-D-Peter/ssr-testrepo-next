import { PostDetail } from '../../model/post';

export type PostCardSizeType = 'large' | 'medium' | 'small';

export interface PostCardProps {
  data: PostDetail;
}
