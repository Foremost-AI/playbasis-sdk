import type { Response } from './base';

interface Event {
  event_type: string;
  reward_type?: string;
  reward_data?: any;
  value: any;
}

interface EventMission {
  events: Event[];
  mission_id: string;
  mission_number: string;
  mission_name: string;
  description: string;
  hint: string;
  image: string;
  quest_id: string;
}

interface EventQuest {
  events: Event[];
  quest_id: string;
  quest_name: string;
  description: string;
  hint: string;
  image: string;
}

export type EngineResponse = Response<{
  events: Event[];
  events_missions: EventMission[];
  events_quests: EventQuest[];
}>;
