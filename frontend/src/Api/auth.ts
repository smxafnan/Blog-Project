// src/api/auth.ts
import apiClient from './Axios';

export const AuthApi = {
  login(email: string, password: string) {
    return apiClient.post('/auth/login', { email, password });
  },
  
  logout() {
    return apiClient.post('/auth/logout');
  },
  
  register(username: string, email: string, password: string) {
    return apiClient.post('/auth/register', { username, email, password });
  }
};