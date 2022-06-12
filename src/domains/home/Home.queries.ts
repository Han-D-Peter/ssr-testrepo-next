import { useQuery } from 'react-query';
import HomeRepository from './Home.repository';

export const useGetPostsQuery = () => useQuery('GetPosts', () => HomeRepository.getPosts());
