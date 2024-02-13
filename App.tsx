import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, GluestackUIProvider} from '@gluestack-ui/themed';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

// import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';
import Navigation from './src/navigation';
import {configSentry} from './src/config';
import {AuthContextProvider} from './src/context';
import {Colors, gluestackTheme} from './src/theme';
import {configAxios} from './src/services';
import {APIRootService} from './src/services/api/api-root.service';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

APIRootService.getAxiosInstance();
//configAxios();
configSentry();

const queryClient = new QueryClient({
  defaultOptions: {queries: {retry: false}},
});

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <GluestackUIProvider config={gluestackTheme.config}>
            <SafeAreaView style={styles.container}>
              <Box flex={1}>
                <Navigation />
                <Toast position="bottom" />
              </Box>
            </SafeAreaView>
          </GluestackUIProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
});

export default App;
