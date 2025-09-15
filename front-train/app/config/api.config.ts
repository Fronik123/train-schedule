export const API_URL = process.env.SERVER_URL;

export const getAuthUrl = (string: string) => `/auth${string}`;
export const getUserUrl = (string: string) => `/users${string}`;
export const getScheduleUrl = (string: string) => `/schedule${string}`;
