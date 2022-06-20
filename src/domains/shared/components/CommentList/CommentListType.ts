import { CommentProps as Comment } from '../Comment/CommentType';

export interface CommentListProps {
  totalCounts?: number;
  comments: Comment[];
  isLoadMore?: boolean;
  onLoadMore?: () => void;
}
