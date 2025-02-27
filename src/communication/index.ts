import type { AxiosError, AxiosResponse } from 'axios';
import getHttpClient from '../tools/axios';
import type { ETokenType, EUserRace } from '../enums';
import type * as types from '../types';
import { generateRandomName } from '../tools';
import { generateCodeChallengeFromVerifier, generateCodeVerifier } from '../tools/crypto';

export const sendMessage = async (receiver: string, body: string): Promise<AxiosResponse<types.IDefaultResponse>> => {
  try {
    return getHttpClient().post('/message/send', { body, receiver });
  } catch (err) {
    throw new Error((err as AxiosError<{ error: Error }>).response!.data.error.message);
  }
};

export const getMessages = async (): Promise<AxiosResponse<types.IGetMessages>> => {
  try {
    return getHttpClient().get('message?page=1');
  } catch (err) {
    throw new Error((err as AxiosError<{ error: Error }>).response!.data.error.message);
  }
};

export const initProfile = async (race: EUserRace): Promise<AxiosResponse<types.IDefaultResponse>> => {
  try {
    return getHttpClient().post('/profile', { race });
  } catch (err) {
    throw new Error((err as AxiosError<{ error: Error }>).response!.data.error.message);
  }
};

export const attack = async (target: string): Promise<AxiosResponse<types.IAttack>> => {
  try {
    return getHttpClient().post('/fights/attack', { target });
  } catch (err) {
    throw new Error((err as AxiosError<{ error: Error }>).response!.data.error.message);
  }
};

export const getActiveFight = async (): Promise<AxiosResponse<types.IGetActiveFight>> => {
  try {

    const queryParams = new URLSearchParams({
      active: 'true',
    }).toString();

    return getHttpClient().get(`/fights?${queryParams}`);
  } catch (err) {
    throw new Error((err as AxiosError<{ error: Error }>).response!.data.error.message);
  }
};

export const sendToLoginPage = async (): Promise<void> => {
  const redirectUrl = import.meta.env.VITE_API_REDIRECT_LOGIN_URL as string;
  const clientId = import.meta.env.VITE_API_CLIENT_ID as string;
  const server = import.meta.env.VITE_API_BACKEND as string;
  const verifier = generateCodeVerifier();
  const challenge = await generateCodeChallengeFromVerifier(verifier);
  sessionStorage.setItem('verifier', verifier);


  const queryParams = new URLSearchParams({
    client_id: clientId,
    response_type: 'code',
    redirect_uri: redirectUrl,
    nonce: generateRandomName(),
    scope: 'openid',
    code_challenge_method: 'S256',
    code_challenge: challenge,
  }).toString();
  window.location.href = `${server}/auth?${queryParams}`;
};

export const sendToLogoutPage = (): void => {
  const redirectUrl = import.meta.env.VITE_API_HOME as string;
  const clientId = import.meta.env.VITE_API_CLIENT_ID as string;
  const server = import.meta.env.VITE_API_BACKEND as string;


  const params = new URLSearchParams({
    post_logout_redirect_uri: redirectUrl,
    client_id: clientId,
  }).toString();
  window.location.href = `${server}/session/end?${params}`;
};

export const getUserLogin = async (): Promise<AxiosResponse<types.IGetLogin>> => {
  try {
    return getHttpClient().get('/me');
  } catch (err) {
    throw new Error((err as AxiosError<{ error: Error }>).response!.data.error.message);
  }
};

export const getUserProfile = async (name: string): Promise<AxiosResponse<types.IGetProfile>> => {
  try {
    return getHttpClient().get(`/profile?name=${name}`);
  } catch (err) {
    throw new Error((err as AxiosError<{ error: Error }>).response!.data.error.message);
  }
};

export const getMap = async (): Promise<AxiosResponse<{ data: types.IMapEntity }>> => {
  try {
    return getHttpClient().get('/maps?name=main');
  } catch (err) {
    throw new Error((err as AxiosError<{ error: Error }>).response!.data.error.message);
  }
};

export const createAccount = async (
  formData: types.IRegisterFormValues,
): Promise<AxiosResponse<types.IDefaultResponse>> => {
  try {
    return getHttpClient().post('/users/register', formData);
  } catch (err) {
    throw new Error((err as AxiosError<{ error: Error }>).response!.data.error.message);
  }
};

export const login = async (code: string): Promise<AxiosResponse<types.IGetToken>> => {
  const redirectUrl = import.meta.env.VITE_API_REDIRECT_LOGIN_URL as string;
  const clientSecret = import.meta.env.VITE_API_CLIENT_SECRET as string;
  const clientId = import.meta.env.VITE_API_CLIENT_ID as string;
  const verifier = sessionStorage.getItem('verifier') as string;
  sessionStorage.removeItem('verifier');


  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    code,
    grant_type: 'authorization_code',
    redirect_uri: redirectUrl,
    code_verifier: verifier,
  });

  try {
    return getHttpClient({ noToken: true }).post('/token', body);
  } catch (err) {
    throw new Error((err as AxiosError<{ error: Error }>).response!.data.error.message);
  }
};

export const revokeToken = async (token: string, type: ETokenType): Promise<AxiosResponse<types.IDefaultResponse>> => {
  const clientSecret = import.meta.env.VITE_API_CLIENT_SECRET as string;
  const clientId = import.meta.env.VITE_API_CLIENT_ID as string;


  const body = new URLSearchParams({
    token,
    token_type_hint: type,
    client_id: clientId,
    client_secret: clientSecret,
  });

  try {
    return getHttpClient({ noToken: true }).post('/token/revocation', body);
  } catch (err) {
    throw new Error((err as AxiosError<{ error: Error }>).response!.data.error.message);
  }
};

export const createFight = async (enemy: string): Promise<AxiosResponse<types.ICreateFightResponse>> => {
  try {
    return getHttpClient().post('/debug/fights/create', { team: [enemy] });
  } catch (err) {
    throw new Error((err as AxiosError<{ error: Error }>).response!.data.error.message);
  }
};

export const leaveFight = async (): Promise<AxiosResponse<types.IDefaultResponse>> => {
  try {
    return getHttpClient().get('/fights/leave', {});
  } catch (err) {
    throw new Error((err as AxiosError<{ error: Error }>).response!.data.error.message);
  }
};

export const reportBug = async (message: string): Promise<AxiosResponse<types.IDefaultResponse>> => {
  try {
    return getHttpClient().post('/bug', { message });
  } catch (err) {
    throw new Error((err as AxiosError<{ error: Error }>).response!.data.error.message);
  }
};

export const setTodeleteAccount = async (): Promise<AxiosResponse> => {
  try {
    return getHttpClient().delete('/users/remove');
  } catch (err) {
    throw new Error('something went wrong...');
  }
};

export const deleteAccount = async (data: { password: string }): Promise<AxiosResponse> => {
  try {
    return getHttpClient().post('/users/remove', data.password);
  } catch (err) {
    throw new Error('something went wrong...');
  }
};
