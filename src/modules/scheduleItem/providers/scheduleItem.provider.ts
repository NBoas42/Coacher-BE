import { Connection } from 'mongoose';
import { ScheduleItemSchema } from '../model/scheduleItem.schema';

export const ScheduleItemProviders = [
  {
    provide: 'SCHEDULEITEM_MODEL',
    useFactory: (connection: Connection) => connection.model('ScheduleItem', ScheduleItemSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];