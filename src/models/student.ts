export interface Student {
  id?: string;
  name: string;
  age: number;
  mark: number;
  gender: 'male' | 'female';
  createAt?: number;
  updateAt?: number;
  city: string;
}
