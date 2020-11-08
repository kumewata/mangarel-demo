// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const sleep = (msec: number) =>
  new Promise((resolve) => setTimeout(() => resolve(), msec));
