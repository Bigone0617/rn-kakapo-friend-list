import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// <Ionicons name="ios-search-outline" size={24} color="black" />
// <Ionicons name="ios-person-add-outline" size={24} color="black" />
// <Ionicons name="ios-musical-notes-outline" size={24} color="black" />
// <Ionicons name="ios-settings-outline" size={24} color="black" />

const IconButton = (props) => {
  return (
    <View style={styles.iconView}>
      <Ionicons name={props.name} size={24} color="black" />
    </View>
  );
};

export default () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>친구</Text>

      <View style={styles.iconButtonContainer}>
        <IconButton name="ios-search-outline" />
        <IconButton name="ios-person-add-outline" />
        <IconButton name="ios-musical-notes-outline" />
        <IconButton name="ios-settings-outline" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  iconButtonContainer: {
    flexDirection: "row",
  },
  iconView: {
    paddingHorizontal: 6,
  },
});
