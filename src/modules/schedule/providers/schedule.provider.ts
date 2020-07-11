import { Connection } from 'mongoose';
import { ScheduleSchema } from '../model/schedule.schema';

export const ScheduleProviders = [
  {
    provide: 'SCHEDULE_MODEL',
    useFactory: (connection: Connection) => connection.model('Schedule', ScheduleSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];