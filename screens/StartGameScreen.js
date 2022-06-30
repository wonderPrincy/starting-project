import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert, Text } from 'react-native';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Color from '../constants/color';

function StartGameScreen(props) {
    const [eneteredNumber, setEnteredNumber] = useState('');
    function numberInputHandler(enteredvalue) {
        setEnteredNumber(enteredvalue);
    };
    function confirmInputHandler() {
        const choosenNumber = parseInt(eneteredNumber);
        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            // show alert....
            Alert.alert('Invalid number !', 'Please enter a valid number',
                [{ text: 'Okay', style: 'default', onPress: resetInputhandler }]);
            return;
        }
        props.onEnteredNumber(choosenNumber);

    };
    function resetInputhandler() {
        setEnteredNumber('');
    };
    return (
        <View style={styles.mainContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' autoCapitalize='none'
                    autoCorrect={false} value={eneteredNumber} onChangeText={numberInputHandler}></TextInput>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onClick={resetInputhandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onClick={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>

            </Card>
        </View>
    );
}


export default StartGameScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 100,
        alignItems:'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Color.secondaryColor,
        borderBottomWidth: 2,
        color: Color.secondaryColor,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
});