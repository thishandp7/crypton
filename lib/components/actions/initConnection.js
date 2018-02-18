export const INIT_CONNECTION = 'INIT_CONNECTION';
export const initConnection = () => {
  return {
    type: INIT_CONNECTION,
    payload: 'initializing connection'
  };
};
