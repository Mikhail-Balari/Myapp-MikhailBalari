import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'

const TopBar = ({
    input,
    setInput,
    onAddTask
}) => {
  return (
    <View style={styles.view1}>
        <TextInput 
            style={styles.input} 
            placeholder='Escribe aquí la tarea'
            value={input}
            onChangeText={setInput}/> 
        <TouchableOpacity 
            style = {styles.buttonTouchable}
            onPress={onAddTask}>
            <Text> Agregar </Text>
        </TouchableOpacity>
      </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
    view1: {
        height:"10%",
        flexDirection: "row",
        gap: 30,
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        width: '100%'
    },
    input: {
        width: 150,
        borderBottomColor: 'lightgreen',
        borderBottomWidth: 3,
        marginBottom: 8,
        color: "grey"
    },
    buttonTouchable: {
        paddingHorizontal: 10,
        width: 110,
        backgroundColor: 'deepskyblue',
        borderRadius: 3,
        alignItems: 'center',
        padding: 5
    },
})