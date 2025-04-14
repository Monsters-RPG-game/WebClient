import { ENotificationType } from '../../enums/notifications.js';
import * as hooks from '../../redux/index.js';
import type { IWebsocketMessage } from './types.js';
import type { MainDispatch } from '../../store/types.js';

export default class Controller {
  // eslint-disable-next-line no-use-before-define
  private static _instance: Controller | undefined = undefined;
  private readonly _dispatch: MainDispatch;
  private _connection: WebSocket | undefined;

  constructor(dispatch: MainDispatch) {
    this._dispatch = dispatch;
    this.init();
  }

  private static get instance(): Controller | undefined {
    return Controller._instance;
  }

  private static set instance(val: Controller) {
    Controller._instance = val;
  }

  private get connection(): WebSocket | undefined {
    return this._connection;
  }

  private set connection(value: WebSocket | undefined) {
    this._connection = value;
  }

  private get dispatch(): MainDispatch {
    return this._dispatch;
  }

  static getInstance(dispatch?: MainDispatch): Controller {
    Controller.instance ??= new Controller(dispatch!);

    return Controller.instance;
  }

  sendMessage(message: unknown): void {
    if (this.connection?.readyState === WebSocket.OPEN) {
      this.connection.send(JSON.stringify(message));
    } else {
      console.warn('Websocket connection closed. Cannot sand message');
    }
  }

  close(): void {
    this.connection?.close();
  }

  private init(): void {
    const wsUrl = import.meta.env.VITE_WS_BACKEND as string;

    if (!this.connection || this.connection.readyState === WebSocket.CLOSED) {
      console.log('Connecting to ws');
      this.connection = new WebSocket(wsUrl);

      this.connection.onopen = (): void => {
        console.log('WebSocket connected');
      };
      this.connection.onclose = (callback): void => {
        console.log('WebSocket disconnected', callback);
      };
      this.connection.onerror = (callback): void => {
        console.log('WebSocket error', callback);
      };

      this.connection.onmessage = (event): void => {
        this.errorWrapper(() => this.onMessage(JSON.parse(event.data as string) as IWebsocketMessage));
      };
    }
  }

  private onMessage(event: IWebsocketMessage): void {
    console.log('Got new message');
    console.log(event);
    this.dispatch(hooks.addNotification({ type: ENotificationType.Default, message: 'Received new message' }));
  }

  private errorWrapper(callback: () => void): void {
    try {
      callback();
    } catch (err) {
      console.log('Got error in websocket ', err);
    }
  }
}
