import { useQuery } from 'react-query';
import axiosInstance from './axios';

export interface Project {
  name: string;
  description: string;
  // Adicione mais campos conforme necessário
}

export const useProjects = () => {
  return useQuery<Project[]>('projects', async () => {
    const response = await axiosInstance.get('/projects');
    return response.data;
  });
}; 