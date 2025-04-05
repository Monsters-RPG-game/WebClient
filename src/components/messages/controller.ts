// eslint-disable-next-line import/prefer-default-export
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
