export interface IWebsocketMessage {
  type: string;
  payload: { body: string };
}
