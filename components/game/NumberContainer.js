import { View,StyleSheet,Text } from "react-native";
import Color from "../../constants/color";

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.textContainer}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const styles=StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:Color.terinaryColor,
        padding:24,
        borderRadius:8,
        margin:24,
        alignItems:'center',
        justifyContent:'center'
    },
    textContainer:{
        color:Color.primaryColor,
        fontSize:36,
        fontWeight:'bold'
    }
})