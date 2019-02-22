import { IWinstonTransportConfiguration } from "../../core";

export interface IWinstonTelegramTransportConfiguration extends IWinstonTransportConfiguration {
  token: string;
  chatId: number;
  disableNotification: boolean;
}
