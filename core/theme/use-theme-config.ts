import { DefaultTheme, Theme } from "@react-navigation/native";


const LightTheme : Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "white",
    }
}

export const useThemeConfig = () => {
    return  LightTheme;
}