import { User } from './users';

export interface Group {
  id: number;
  title: string;
  tags: string[];
  address: string;
  createdBy: User;
  thumbnail: string;
  maxParticipants: number;
  joinedParticipants: number;
  createdAt: string;
  updatedAt: string;
  startedAt: string;
}
