// eslint-disable-next-line import/prefer-default-export
export const getUserInfo = async (): Promise<string> => {
  const server = import.meta.env.VITE_API_BACKEND as string;
  const homeUrl = import.meta.env.VITE_API_HOME as string;

  const res = await fetch(`${server}/user/validate`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': homeUrl,
    },
  });

  if (res.ok) {
    return ((await res.json()) as { data: { login: string } }).data.login;
  }

  console.log('Got error', await res.json());
  return 'None. User is not logged in, or something is wrong';
};
