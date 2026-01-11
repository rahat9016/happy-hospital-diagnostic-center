export const baseURL = "http://localhost:3000";

export const getBaseUrl = (): string => {
  return process.env.NEXT_PUBLIC_API_BASE_URL || `${baseURL}`;
};
