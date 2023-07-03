import { StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'

const MainScreen = ({taskList}) => {
  return (
    <View style={styles.container} >
      <View style={styles.view1}>
        <TextInput style={styles.input}/> 
        <TouchableOpacity 
            style = {styles.button}
        >
            <Text>Agregar Tarea</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.view2}>
        {taskList.map(item => 
                <View style={styles.task} key={item.id}>
                    <Text>
                        {item.task}
                    </Text>
                </View>
            )
        }
      </View>
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view1: {
        flex: 1,
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
        marginBottom: 8
    },
    button: {
        paddingHorizontal: 10,
        width: 150,
        backgroundColor: 'deepskyblue',
        borderRadius: 5,
        alignItems: 'center',
        padding: 5
    },
    view2: {
        flex: 4,
        backgroundColor: "lightgreen",
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 15
    },
    task: {
        width: '80%',
        backgroundColor: 'white',
        padding: 10,
        margin: 5
    }
})