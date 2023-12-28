import { ScrollView, View } from "react-native"
import Profile from "./Profile"
import { getBottomSpace } from "react-native-iphone-x-helper"
import Margin from "./Margin";

const bottomSpace = getBottomSpace();

export default (props) => {
    return props.isOpened && (<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: bottomSpace}}>
        {props.data.map((friend, idx) =>(
            <View key={idx}>
                <Profile
                    
                    uri={friend.uri}
                    name={friend.name}
                    introduction={friend.introduction}
                />
                <Margin height={13}/>
            </View>
        ))}
    </ScrollView>)
}