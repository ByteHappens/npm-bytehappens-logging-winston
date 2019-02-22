import { MongoClient } from "mongodb";
let MongoDB = require("winston-mongodb").MongoDB;

import { mongodb } from "bytehappens-storage-mongodb";

import { BaseWinstonTransportConfiguration } from "../bytehappens-winston";

import { IWinstonMongoDbTransportConfiguration } from "./interfaces/iwinstonmongodbtransportconfiguration";

export class WinstonMongoDbTransportConfiguration extends BaseWinstonTransportConfiguration
  implements IWinstonMongoDbTransportConfiguration {
  public readonly connection: mongodb.IMongoDbConnection;
  public readonly user: mongodb.IMongoDbUser;
  public readonly collection: string;

  constructor(connection: mongodb.IMongoDbConnection, user: mongodb.IMongoDbUser, collection: string, level: string) {
    super(level);

    this.connection = connection;
    this.user = user;
    this.collection = collection;
  }

  public Validate(): void {
    super.Validate();

    mongodb.ValidateMongoDbConnection(this.connection);
    mongodb.ValidateMongoDbUser(this.user);
  }

  public async InitTransportAsync(): Promise<any> {
    let client: MongoClient = await mongodb.CreateMongoDbClientAsync(this.connection, this.user);

    let transportOptions = {
      level: this.level,
      db: client,
      collection: this.collection
    };

    let response: any = new MongoDB(transportOptions);
    return response;
  }
}
