export interface Student {
  id: string;
  name: string;
  imageUrl: string;
  class: string;
  year: number;
  location: string;
  courses: Course[];
}

export interface Course {
  id: string;
  name: string;
  completionPercentage: number;
}