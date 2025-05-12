import { ThemeProvider } from '@react-navigation/native';
import '../global.css';

import { Stack } from 'expo-router';
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import { useThemeConfig } from '~/core/theme/use-theme-config';
import { ReactNode } from 'react';

const Providers = ({children}: {children: ReactNode})=> {
  const theme = useThemeConfig()
  return(
    <GestureHandlerRootView className='flex-1 bg-white'>
      <ThemeProvider value={theme}>
        {children}
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}

export default function RootLayoutNav() {
  return (<Providers>
    <Stack>
      <Stack.Screen name='index'/>
    </Stack>
  </Providers>
  );
}
