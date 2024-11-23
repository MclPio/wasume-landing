export const getBasePath = () => {
  // Return empty in development, repo name in production
  return process.env.NODE_ENV === 'production' ? '/wasume-landing' : '';
};