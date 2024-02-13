import * as Sentry from '@sentry/react-native';

export const baseURL = 'https://tickets.eze.finance/v1';

export const configSentry = () => {
  return (
    !__DEV__ &&
    Sentry.init({
      dsn: 'https://9b8f3b29efe7b2de792b7ec4e91d5c4a@o1082210.ingest.sentry.io/4505834560356352',
      enableAutoSessionTracking: true,
      debug: __DEV__,
      enabled: !__DEV__,
      // logLevel: LogLevel.Error
    })
  );
};
