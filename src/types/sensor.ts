import { z } from 'zod';

import { sensorSchema } from '@/schemas/sensor';

export type SensorPayload = z.infer<typeof sensorSchema>;
