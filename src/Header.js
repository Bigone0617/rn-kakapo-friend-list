import { StyleSheet, Text, View } from "react-native";

export default () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {},
  title: {},
});
