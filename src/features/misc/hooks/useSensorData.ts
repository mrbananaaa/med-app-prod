import { useCallback, useEffect, useState } from 'react';

import { socket } from '@/lib/socketIo';
import { SensorPayload } from '@/types/sensor';

export const useSensorData = () => {
  const [sensorData, setSensorData] = useState<SensorPayload>();

  const handleDataChange = useCallback((sensorPayload: SensorPayload) => {
    setSensorData(sensorPayload);
  }, []);

  useEffect(() => {
    const onSensorBroadcast = (sensorPayload: SensorPayload) => {
      handleDataChange(sensorPayload);
    };

    socket.on('sensor:broadcast', onSensorBroadcast);

    return () => {
      socket.off('sensor:broadcast', onSensorBroadcast);
    };
  }, [handleDataChange]);

  return { sensorData };
};
