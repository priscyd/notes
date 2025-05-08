import { Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { DEFAULT_ICON_SIZE } from "~/core/constants";
import { COLORS } from "~/core/theme/colors";
const Header = () => {
  return (
    <View className="mb-4 flex-row items-center p-4">
        <View className="flex-row items-center gap-2">
            <Ionicons name="albums" size={DEFAULT_ICON_SIZE} color={COLORS.primary} />
            <Text className="text-2xl font-bold text-primary">Notes</Text>
        </View>
        <View className="ml-auto">
            <Ionicons name="notifications" size={DEFAULT_ICON_SIZE} color={COLORS.primary} />
        </View>
    </View>
  )
}

export default Header;