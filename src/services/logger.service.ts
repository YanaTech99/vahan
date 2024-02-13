/**
@file logger.service.ts
@description Log service
*/
export class ConsoleLogger {
  private static isEnabled = true;
  public static longsList: Array<string> = [];
  public static log(...data: any[]): void {
    if (this.isEnabled) {
      console.log(data);
      ConsoleLogger.longsList.push(`${JSON.stringify(data)}`);
    }
  }

  public static error(...error: any[]): void {
    if (ConsoleLogger.isEnabled) {
      console.error(error);
    }
  }

  public static getLogsList(): Array<string> {
    if (ConsoleLogger.isEnabled) {
      return ConsoleLogger.longsList;
    } else {
      return [];
    }
  }
}
