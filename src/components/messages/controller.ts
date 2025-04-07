import type { IDetails, IMessage } from 'src/types';

export const sendMessage = async (receiver: string, body: string): Promise<void> => {
  const server = import.meta.env.VITE_API_BACKEND as string;
  const homeUrl = import.meta.env.VITE_API_HOME as string;

  const res = await fetch(`${server}/message/send`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': homeUrl,
    },
    body: JSON.stringify({
      body,
      receiver,
    }),
  });

  if (res.ok) {
    return undefined;
  }

  const err = (await res.json()) as { error: Error };
  throw err.error;
};

export const getMessages = async (): Promise<Record<string, IMessage>> => {
  const server = import.meta.env.VITE_API_BACKEND as string;
  const homeUrl = import.meta.env.VITE_API_HOME as string;

  const res = await fetch(`${server}/message`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': homeUrl,
    },
  });

  if (res.ok) {
    const data = (await res.json()) as { data: Record<string, IMessage> };
    return data.data;
  }

  const err = (await res.json()) as { error: Error };
  throw err.error;
};

export const getChatDetails = async (target: string): Promise<IDetails[]> => {
  const server = import.meta.env.VITE_API_BACKEND as string;
  const homeUrl = import.meta.env.VITE_API_HOME as string;

  const query = new URLSearchParams({
    target,
  });

  const res = await fetch(`${server}/message?${query.toString()}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': homeUrl,
    },
  });

  if (res.ok) {
    const data = (await res.json()) as { data: IDetails[] };
    return data.data;
  }

  const err = (await res.json()) as { error: Error };
  throw err.error;
};
