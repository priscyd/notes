import { Ionicons } from '@expo/vector-icons';
import { DEFAULT_ICON_SIZE } from '@expo/vector-icons/build/createIconSet';
import { View, Text, Platform } from 'react-native';
import { MenuView } from '@react-native-menu/menu';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Note = ({ item }: { item: Note }) => {
  return (
    <View className="flex-row items-center justify-center rounded-[24px] bg-[#FAF9F0] p-6">
      <View className="w-full flex-row items-center justify-between ">
        <Text className="text-xl">{item.title}</Text>
        <MenuView title='' actions={[{
          id:"edit",
          title:"Edit",
          titleColor: Colors.primary,
          image: Platform.select({
            ios:"plus"
          }),
          imageColor: Colors.primary
        }, {
          id:'destructive',
          title: "Delete",
          attributes :{
            destructive: true
          },
          image: Platform.select({
            ios: 'trash-outline'
          })
        }
        ]}>
          <Ionicons name="ellipsis-vertical" size={DEFAULT_ICON_SIZE} />
        </MenuView>
      </View>
    </View>
  );
};

export default Note;
