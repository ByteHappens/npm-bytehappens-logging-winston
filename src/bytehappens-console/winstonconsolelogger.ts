import { logging } from "bytehappens";

import { WinstonLogger } from "../bytehappens-winston";

export class WinstonConsoleLogger<TLog extends logging.ILog> extends WinstonLogger<TLog> {}
