import type { IUser } from '../../types';

// eslint-disable-next-line import/prefer-default-export
export const getAllUsers = async (): Promise<IUser[]> => {
  const server = import.meta.env.VITE_API_BACKEND as string;
  const homeUrl = import.meta.env.VITE_API_HOME as string;

  const res = await fetch(`${server}/user/debug`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': homeUrl,
    },
  });

  if (res.ok) {
    const data = (await res.json()) as { data: IUser[] };
    return data.data;
  }

  const err = (await res.json()) as { error: Error };
  throw err.error;
};
