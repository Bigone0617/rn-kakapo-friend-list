import { View, Text, TouchableOpacity } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';

{/* <MaterialIcons name="keyboard-arrow-up" size={24} color="black" /> */}

export default (props) => {
    return (
    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
        <Text>친구 {props.friendProfileLen}</Text>
        <TouchableOpacity onPress={props.onPressArrow}>
            <MaterialIcons name={props.isOpened ? "keyboard-arrow-down" : "keyboard-arrow-up"} size={24} color="black" />
         </TouchableOpacity>
    </View>)
}