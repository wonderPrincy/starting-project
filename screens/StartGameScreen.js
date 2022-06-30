import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
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
        <View style={styles.inputContainer}>
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

        </View>
    );
}


export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
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
    }
});