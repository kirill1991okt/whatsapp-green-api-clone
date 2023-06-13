export const stringRandomGeneration = (): string => {
  return Math.random().toString(36).slice(2, 7);
};
