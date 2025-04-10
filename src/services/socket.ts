import {io, Socket} from 'socket.io-client';

let socket: Socket;

export const connectSocket = (userId: string) => {
  socket = io('http://localhost:5001', {
    transports: ['websocket'],
  });

  socket.on('connect', () => {
    console.log('Socket connected:', socket.id);
    socket.emit('register', userId); // Sunucuya kullanıcıyı bildir
  });

  socket.on('notification', payload => {
    console.log('📩 Bildirim alındı:', payload);
    // buradan Redux'a dispatch edebilir ya da UI'da snackbar gösterebilirsin
  });
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
  }
};

export const getSocket = () => socket;
