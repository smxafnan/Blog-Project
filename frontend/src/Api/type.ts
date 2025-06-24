// src/api/types.ts
export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface Post {
  id: string;
  title: string;
  tags: string[];
  imageUrl?: string;
  createdAt?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}