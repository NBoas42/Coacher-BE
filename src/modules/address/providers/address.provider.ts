import { Connection } from 'mongoose';
import { AddressSchema } from '../model/address.schema';

export const UserProviders = [
  {
    provide: 'ADDRESS_MODEL',
    useFactory: (connection: Connection) => connection.model('Address', AddressSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];