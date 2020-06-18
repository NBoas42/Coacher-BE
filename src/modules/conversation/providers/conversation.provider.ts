import { Connection } from 'mongoose';
import { ConversationSchema } from '../model/conversation.schema';

export const conversationProviders = [
  {
    provide: 'CONVERSATION_MODEL',
    useFactory: (connection: Connection) => connection.model('conversation', ConversationSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];