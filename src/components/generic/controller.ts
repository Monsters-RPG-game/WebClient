export const refreshTokens = async (): Promise<void> => {
  const server = import.meta.env.VITE_API_BACKEND as string;
  const homeUrl = import.meta.env.VITE_API_HOME as string;

  const res = await fetch(`${server}/user/refresh`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': homeUrl,
    },
  });

  if (res.ok) {
    return;
  }

  const err = (await res.json()) as { error: Error };
  throw err.error;
};

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

  const err = (await res.json()) as { error: Error };
  throw err.error;
};

export const sendToLogoutPage = (): void => {
  const client = import.meta.env.VITE_API_BACKEND_LOGOUT_CLIENT as string;
  const server = import.meta.env.VITE_API_BACKEND as string;

  const queryParams = new URLSearchParams({
    client,
  }).toString();

  window.location.href = `${server}/user/logout/start?${queryParams}`;
};

export const loginUser = async (): Promise<string> => {
  try {
    return await getUserInfo();
  } catch (_err) {
    await refreshTokens();
    return getUserInfo();
  }
};
