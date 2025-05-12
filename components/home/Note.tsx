import { Ionicons } from '@expo/vector-icons';
import { DEFAULT_ICON_SIZE } from '@expo/vector-icons/build/createIconSet';
import { View, Text } from 'react-native';

const Note = ({ item }: { item: Note }) => {
  return (
    <View className="flex-row items-center justify-center  rounded-[24px] bg-[#FAF9F0] p-6">
      <View className="w-full flex-row items-center justify-between px-10">
        <Text className="text-xl">{item.title}</Text>
        <Ionicons name="ellipsis-vertical" size={DEFAULT_ICON_SIZE} />
      </View>
    </View>
  );
};

export default Note;
