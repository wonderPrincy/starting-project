import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import { Ionicons } from '@expo/vector-icons'

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }
};
function GameScreen({ userNumber, onGameOver }) {
    const initialGuessNumber = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuessNumber);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);
    function nextGuessHandler(direction) { /* lower or greater */
        let newRandomNumber = 0;
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't Lie !!", "You know this is wrong", [{ text: "Sorry", style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            newRandomNumber = generateRandomBetween(1, currentGuess, currentGuess)
        }
        else {
            newRandomNumber = generateRandomBetween(currentGuess + 1, 100, currentGuess)
        }
        setCurrentGuess(newRandomNumber);
    }

    return (
        <View style={styles.screen}>
            {/* <Text style={styles.title}>Opponent's Guess</Text> */}
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}> Higher or Lower ?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onClick={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="md-add" size={24} color="white"></Ionicons>
                        </PrimaryButton></View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onClick={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="md-remove" size={24} color="white"></Ionicons>
                        </PrimaryButton>
                    </View>
                </View>
            </Card >

            {/* <View>
                <Text> Log Rounds</Text>
            </View> */}
        </View >
    );

}


export default GameScreen;


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40,
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    instructionText: {
        marginBottom: 12
    }
});