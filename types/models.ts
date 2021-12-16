export interface Question {
  id: number;
  text: string;
}

export interface Form {
  authorId: string;
  title: string;
  heading: string;
  desc: string;
  questions: Question[]
}