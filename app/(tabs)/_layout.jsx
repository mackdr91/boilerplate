import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "#000",
      }}
    >
      {/* Tab screens will be automatically added here based on your (tabs) folder structure */}
    </Tabs>
  );
}

const styles = StyleSheet.create({});
