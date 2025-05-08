import { Stack, Link } from 'expo-router';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '~/components/home/Header';
import Note from '~/components/home/Note';
import Separator from '~/components/Separator';
import { DATA } from '~/core/constants';

export default function Home() {

  const renderItem = ({ item }: { item: Note }) => {
    return (
      <View className='bg-white p-6 rounded-lg'>
        <Text>{item.title}</Text>
      </View>
    )
  }
  const keyExtractor = (item: Note) => item.id;

  return (
    <SafeAreaView  className='flex-1 '>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />
      <View className="flex-1  p-4">
       <FlatList data={DATA} renderItem={Note} keyExtractor={keyExtractor} ItemSeparatorComponent={Separator} />
      </View>
    </SafeAreaView>
  );
}
