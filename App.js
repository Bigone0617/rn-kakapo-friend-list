import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { friendProfiles, myProfile } from "./src/data";

import Header from "./src/Header";
import Profile from "./src/Profile";
import Margin from "./src/Margin";
import Division from "./src/Division";
import FriendSection from "./src/FriendSection";
import FriendList from "./src/FriendList";
import { useState } from "react";

export default function App() {
  const [isOpened, setIsOpened] = useState(true);

  const onPressArrow = () => {
    setIsOpened(!isOpened)
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "right", "left"]}>
        <Header />

        <Margin height={10} />

        <Profile
          name={myProfile.name}
          introduction={myProfile.introduction}
          uri={myProfile.uri}
        />

        <Margin height={15} />

        <Division/>

        <Margin height={12} />

        <FriendSection
          friendProfileLen={friendProfiles.length}
          onPressArrow={onPressArrow}
          isOpened={isOpened}
        />

        <FriendList
          data={friendProfiles}
          isOpened={isOpened}
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
    paddingHorizontal: 15
  },
});
