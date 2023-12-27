import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { myProfile } from "./src/data";

import Header from "./src/Header";
import Myprofile from "./src/Myprofile";
import Margin from "./src/Margin";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "right", "left"]}>
        <Header />
        <Margin height={10} />
        <Myprofile
          name={myProfile.name}
          introduction={myProfile.introduction}
          uri={myProfile.uri}
        />
      </SafeAreaView>
      {/* <View style={styles.container}>
        <Header />
      </View> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
