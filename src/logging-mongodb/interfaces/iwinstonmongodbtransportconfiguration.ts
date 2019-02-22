import { storageMongoDb } from "bytehappens-storage-mongodb";

import { IWinstonTransportConfiguration } from "../../core";

export interface IWinstonMongoDbTransportConfiguration extends IWinstonTransportConfiguration {
  connection: storageMongoDb.core.IMongoDbConnection;
  user: storageMongoDb.core.IMongoDbUser;
  collection: string;
}
