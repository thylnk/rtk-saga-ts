import { ListResponse, Student, ListParams } from 'models';
import axiosClient from './axiosClient';

const url = '/students';

const studentApi = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    return axiosClient.get(url, { params });
  },

  getById(id: string): Promise<Student> {
    const urlID = `/students/${id}`;
    return axiosClient.get(urlID);
  },

  add(data: Student): Promise<Student> {
    return axiosClient.post(url, data);
  },

  update(data: Student): Promise<Student> {
    return axiosClient.patch(url, data);
  },

  remove(id: string): Promise<any> {
    const urlID = `/students/${id}`;

    return axiosClient.delete(urlID);
  },
};

export default studentApi;
