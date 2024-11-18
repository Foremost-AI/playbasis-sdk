import type { Response } from './base';

export enum Gender {
  MALE = 1,
  FEMALE = 2,
}

export enum ApproveStatus {
  APPROVED = 'approved',
  REJECTED = 'rejected',
  PENDING = 'pending',
}

export interface RegisterRequest {
  username?: string;
  password?: string;
  email?: string;
  phone_number?: string;
  first_name?: string;
  last_name?: string;
  gender?: Gender;
  birth_date?: string;
  code?: string;
  image?: string;
  tags?: string;
  device_id?: string;
  approve_status?: ApproveStatus;
}

export type RegisterResponse = Response<any[]>;

export type PlayerResponse = Response<{
  player: {
    cl_player_id: string;
    image: string;
    username: string;
    exp: number;
    level: number;
    first_name: string;
    last_name: string;
    gender: number,
  }
}>;

interface Point {
  reward_id: string;
  reward_name: string;
  value: number;
}

export type PointsResponse = Response<{
  points: Point[];
}>;


export type PointResponse = Response<{
  point: Point;
}>;
