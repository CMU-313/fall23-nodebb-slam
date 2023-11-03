import { UserObjectSlim } from './user';

/* @noflow */
export type FlagHistoryObject = {
  history: History[];
};

interface History {
  uid: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fields: any;
  meta: Meta[];
  datetime: number;
  datetimeISO: string;
  user: UserObjectSlim;
}

interface Meta {
  key: string;
  value: string;
  labelClass: string;
}

/* @noflow */
export type FlagNotesObject = {
  notes: Note[];
};

/* @noflow */
export interface Note {
  uid: number;
  content: string;
  datetime: number;
  datetimeISO: string;
  user: UserObjectSlim;
}

/* @noflow */
export type FlagObject = {
  state: string;
  flagId: number;
  type: string;
  targetId: number;
  targetUid: number;
  datetime: number;
  datetimeISO: string;
  target_readable: string;
  target: object;
  assignee: number;
  reports: Reports;
} & FlagHistoryObject & FlagNotesObject;

/* @noflow */
export interface Reports {
  value: string;
  timestamp: number;
  timestampISO: string;
  reporter: UserObjectSlim;
}
