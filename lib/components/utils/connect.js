import io from 'socket.io-client';
import config from '../../config';

export default () => {
  const socket = io(`http://localhost:${config.port}`);
  return new Promise((resolve) => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
};
