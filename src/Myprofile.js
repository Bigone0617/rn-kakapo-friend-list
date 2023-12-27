import { Image, StyleSheet, Text, View } from "react-native";

import Margin from "./Margin";

export default (props) => {
  return (
    <View style={styles.myProfileCotainer}>
      <Image source={{ uri: props.uri }} style={styles.profileImage} />
      <View style={styles.textCotainer}>
        <Text style={styles.nameText}>{props.name}</Text>
        <Margin height={6} />
        <Text style={styles.introductionText}>{props.introduction}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  myProfileCotainer: {
    flexDirection: "row",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  textCotainer: {
    justifyContent: "center",
    marginLeft: 10,
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  introductionText: {
    fontSize: 12,
    color: "grey",
  },
});
