import * as internalCore from "./core";
import * as internalConsole from "./logging-console";
import * as internalTelegram from "./logging-telegram";
import * as internalMongoDb from "./logging-mongodb";

export namespace loggingWinston {
  //  SCK: Not too happy about this, will change when i figure how to put it at root
  export import core = internalCore;

  export import console = internalConsole;
  export import telegram = internalTelegram;
  export import mongodb = internalMongoDb;
}
