export interface IMessage {
  messages: number;
  receiver: string;
  sender: string;
}

export interface IDetails {
  _id: string;
  chatId: string;
  date: string;
  message: string;
  read: boolean;
  receiver: string;
  sender: string;
}
