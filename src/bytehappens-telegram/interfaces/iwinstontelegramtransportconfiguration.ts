import { IWinstonTransportConfiguration } from "../../bytehappens-winston";

export interface IWinstonTelegramTransportConfiguration extends IWinstonTransportConfiguration {
  token: string;
  chatId: number;
  disableNotification: boolean;
}
