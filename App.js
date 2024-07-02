import { SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import WorkoutFirstScreen from "./screens/WorkOutFirstScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*<HomeScreen />*/}
      <WorkoutFirstScreen />
    </SafeAreaView>
  );
}
