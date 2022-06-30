import { Text, View, StyleSheet } from 'react-native';
import Color from '../../constants/color';

function Title({children}){

    return <Text style={styles.title}>{children}</Text>;
}


export default Title;


const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Color.terinaryColor,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Color.terinaryColor,
        padding: 10
    }
});