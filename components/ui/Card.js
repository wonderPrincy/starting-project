import { View,StyleSheet } from 'react-native';
import Color from '../../constants/color';
function Card({ children }) {
    return (
        <View style={styles.card}>{children}</View>
    );

}

export default Card;

const styles = StyleSheet.create({
    card: {
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Color.terinaryColor,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        alignItems: 'center'
    }
});