import client from 'src/domains/shared/api/client';
import { CreatePostData, CreatePostResponse } from './PostCreate.model';

class PostCreate {
  async create(data: CreatePostData): Promise<CreatePostResponse> {
    return client.post('/post', data);
  }
}

export default new PostCreate();
