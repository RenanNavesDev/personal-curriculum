import { useQuery } from 'react-query';
import axiosInstance from './axios';

export const useProjects = () => {
  return useQuery('projects', async () => {
    const response = await axiosInstance.get('/projects');
    return response.data;
  });


};
