import { Text, View, StyleSheet } from 'react-native';
import Title from '../components/Title';


function GameScreen() {

    return (
        <View style={styles.screen}>
            {/* <Text style={styles.title}>Opponent's Guess</Text> */}
            <Title>Opponent's Guess</Title>
            <View>
                <Text> Higher or Lower ?</Text>
            </View>
            <View>
                <Text> Log Rounds</Text>
            </View>
        </View>
    );

}


export default GameScreen;


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4e0329',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#4e0329',
        padding: 10
    }
});