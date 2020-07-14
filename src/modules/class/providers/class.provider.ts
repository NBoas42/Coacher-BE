import { Connection } from 'mongoose';
import { ClassSchema } from '../model/class.schema';

export const ScheduleItemProviders = [
  {
    provide: 'CLASS_MODEL',
    useFactory: (connection: Connection) => connection.model('Class', ClassSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];