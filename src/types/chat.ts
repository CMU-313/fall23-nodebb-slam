import { UserObjectSlim } from './user';

/* @noflow */
export type MessageObject = {
  content: string;
  timestamp: number;
  fromuid: number;
  roomId: number;
  deleted: boolean;
  system: boolean;
  edited: number;
  timestampISO: string;
  editedISO: string;
  messageId: number;
  fromUser: UserObjectSlim;
  self: number;
  newSet: boolean;
  cleanedContent: string;
};

/* @noflow */
export type RoomObject = {
  owner: number;
  roomId: number;
  roomName: string;
  groupChat: boolean;
};

/* @noflow */
export type RoomUserList = {
  users: UserObjectSlim[];
};

/* @noflow */
export type RoomObjectFull = {
  isOwner: boolean;
  users: UserObjectSlim[];
  canReply: boolean;
  groupChat: boolean;
  usernames: string;
  maximumUsersInChatRoom: number;
  maximumChatMessageLength: number;
  showUserInput: boolean;
  isAdminOrGlobalMod: boolean;
} & RoomObject & MessageObject;
