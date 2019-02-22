import { logging } from "bytehappens";

import { WinstonLoggerFactory } from "../core";

import { IWinstonConsoleTransportConfiguration } from "./interfaces/iwinstonconsoletransportconfiguration";
import { WinstonConsoleLogger } from "./winstonconsolelogger";

export class WinstonConsoleLoggerFactory<TLog extends logging.ILog> extends WinstonLoggerFactory<
  TLog,
  WinstonConsoleLogger<TLog>
> {
  constructor(level: string, configuration: IWinstonConsoleTransportConfiguration) {
    super(level, [configuration]);
  }
}
