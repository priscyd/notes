import { Ionicons } from '@expo/vector-icons';
import { Stack, Link } from 'expo-router';
import { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '~/components/home/Header';
import Note from '~/components/home/Note';
import AddNoteModal from '~/components/Modal';
import Separator from '~/components/Separator';
import { DATA } from '~/core/constants';
import useNoteStore from '~/store/store';

export default function Home() {

  const {notes} = useNoteStore()

  const keyExtractor = (item: Note) => item.id;

  const [visible, setVisible] = useState(false)

  return (
    <SafeAreaView  className='flex-1 '>
      <Stack.Screen options={{ headerShown: false }} />
      <Header />
      <View className="flex-1  p-4">
       <FlatList data={notes} renderItem={({item})=><Note item={item}/>} keyExtractor={keyExtractor} ItemSeparatorComponent={Separator} />
       <TouchableOpacity className='bg-primary p-6 rounded-2xl w-fit absolute right-4 bottom-4' onPress={()=>setVisible(true)}><Ionicons name='add' size={32} color={'white'}/></TouchableOpacity>
      </View>

      <AddNoteModal visible= {visible} setVisible={setVisible}/>
    </SafeAreaView>
  );
}
