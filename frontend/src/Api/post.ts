// src/api/posts.ts
import apiClient from './Axios';

export const PostsApi = {
  getAll(page: number = 1, limit: number = 8) {
    return apiClient.get('/posts', { params: { page, limit } });
  },
  
  getById(id: string) {
    return apiClient.get(`/posts/${id}`);
  },
  
  create(data: { title: string; tags: string[]; imageUrl?: string }) {
    return apiClient.post('/posts', data);
  },
  
  delete(id: string) {
    return apiClient.delete(`/posts/${id}`);
  }
};