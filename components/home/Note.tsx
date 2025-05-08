import { View, Text } from "react-native"
import { SquircleView } from "expo-squircle-view"

const Note = ({item}: {item: Note}) => {
    return (
        <SquircleView className='bg-white p-6 rounded-lg'>
        <View className='bg-white p-6 rounded-lg'>
            <Text>{item.title}</Text>
        </View>
        </SquircleView>
    )
}

export default Note;