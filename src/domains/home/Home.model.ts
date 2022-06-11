import { PostDetail } from '../shared/model/post';

export interface GetPostsResponse {
  content: PostDetail[];
  last: boolean;
  totalPages: number;
  totalElements: number;
}
