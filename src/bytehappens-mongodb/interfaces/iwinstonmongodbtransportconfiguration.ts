import { mongodb } from "bytehappens-storage-mongodb";

import { IWinstonTransportConfiguration } from "../../bytehappens-winston";

export interface IWinstonMongoDbTransportConfiguration extends IWinstonTransportConfiguration {
  connection: mongodb.IMongoDbConnection;
  user: mongodb.IMongoDbUser;
  collection: string;
}
