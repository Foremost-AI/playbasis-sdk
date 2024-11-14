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

export interface RegisterResponse extends Response {
  response: any[] | null;
}

export interface PlayerResponse extends Response {
  response: {
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
  } | null;
}

interface Point {
  reward_id: string;
  reward_name: string;
  value: number;
}

export interface PointsResponse extends Response {
  response: {
    points: Point[];
  } | null;
}


export interface PointResponse extends Response {
  response: {
    point: Point[];
  }
}
