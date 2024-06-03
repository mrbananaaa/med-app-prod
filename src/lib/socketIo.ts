import { io, Socket } from 'socket.io-client';

import { SensorPayload } from '@/types/sensor';

const SOCKET_URL =
  process.env.NODE_ENV === 'production' ? 'https://api.medprecision.com' : 'http://localhost:8080';

interface ServerToClientEvents {
  'sensor:broadcast': (sensorPayload: SensorPayload) => void;
}

interface ClientToServerEvents {
  'sensor:send': (sensorPayload: SensorPayload) => void;
}

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(SOCKET_URL);
