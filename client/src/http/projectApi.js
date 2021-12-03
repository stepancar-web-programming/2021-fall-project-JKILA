import { $host } from './index';

export const createProject = async (project) => {
  const { data } = await $host.post('api/project', project);
  return data;
};

export const deleteProject = async (id) => {
  const { data } = await $host.post(`api/project/${id}`);
  return data;
};

export const fetchProjects = async () => {
  const { data } = await $host.get('api/project');
  return data;
};

export const fetchOneProject = async (id) => {
  const { data } = await $host.get(`api/project/${id}`);
  return data;
};
