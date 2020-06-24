import { Connection } from 'mongoose';
import { MessageSchema } from '../model/message.schema';

export const MessageProviders = [
  {
    provide: 'MESSAGE_MODEL',
    useFactory: (connection: Connection) => connection.model('Message', MessageSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];