// app/index.tsx
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-100">
      <Text className="text-xl text-blue-700 font-bold">Welcome</Text>
    </View>
  );
}
