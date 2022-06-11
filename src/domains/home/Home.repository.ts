import client from 'src/domains/shared/api/client';
import { GetPostsResponse } from './Home.model';

class HomeRepository {
  async getPosts(): Promise<GetPostsResponse> {
    return client.get('/posts');
  }
}

export default new HomeRepository();
