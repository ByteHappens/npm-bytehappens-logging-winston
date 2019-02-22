import { logging } from "bytehappens";

import { WinstonLogger } from "../core";

export class WinstonConsoleLogger<TLog extends logging.ILog> extends WinstonLogger<TLog> {}
