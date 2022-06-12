import client from 'src/domains/shared/api/client';
import { PostDetail } from 'src/domains/shared/model/post';

class PostDetailRepository {
  async getPost(postId: string): Promise<PostDetail> {
    return client.get(`/post/${postId}`);
  }
}

export default new PostDetailRepository();
