import { Stack, Link } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '~/components/home/Header';

export default function Home() {
  return (
    <SafeAreaView  className='flex-1 p-4'>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />
    </SafeAreaView>
  );
}
