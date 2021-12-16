export interface Question {
  id: number;
  text: string;
}

export interface Form {
  id: number;
  title: string;
  heading: string;
  desc: string;
  questions: Question[]
}