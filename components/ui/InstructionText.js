import{Text,StyleSheet} from 'react-native';
function InstructionText({children,style}) {
    return (<Text style={[styles.instructionText,style]}>{children}</Text>);
}

export default InstructionText;

const styles=StyleSheet.create({
    instructionText:{
        color:'white',
        fontSize:24,
    }
});