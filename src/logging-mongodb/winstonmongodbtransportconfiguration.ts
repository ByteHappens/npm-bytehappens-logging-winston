import { MongoClient } from "mongodb";
let MongoDB = require("winston-mongodb").MongoDB;

import { storageMongoDb } from "bytehappens-storage-mongodb";

import { BaseWinstonTransportConfiguration } from "../core";

import { IWinstonMongoDbTransportConfiguration } from "./interfaces/iwinstonmongodbtransportconfiguration";

export class WinstonMongoDbTransportConfiguration extends BaseWinstonTransportConfiguration
  implements IWinstonMongoDbTransportConfiguration {
  public readonly connection: storageMongoDb.core.IMongoDbConnection;
  public readonly user: storageMongoDb.core.IMongoDbUser;
  public readonly collection: string;

  constructor(
    connection: storageMongoDb.core.IMongoDbConnection,
    user: storageMongoDb.core.IMongoDbUser,
    collection: string,
    level: string
  ) {
    super(level);

    this.connection = connection;
    this.user = user;
    this.collection = collection;
  }

  public Validate(): void {
    super.Validate();

    storageMongoDb.core.ValidateMongoDbConnection(this.connection);
    storageMongoDb.core.ValidateMongoDbUser(this.user);
  }

  public async InitTransportAsync(): Promise<any> {
    let client: MongoClient = await storageMongoDb.core.CreateMongoDbClientAsync(this.connection, this.user);

    let transportOptions = {
      level: this.level,
      db: client,
      collection: this.collection,
      metaKey: "meta"
    };

    let response: any = new MongoDB(transportOptions);
    return response;
  }
}
