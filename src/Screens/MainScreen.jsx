import { StyleSheet, TextInput, TouchableOpacity, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { FlatList } from 'react-native-web'

const renderItemTask = ({item, onPressTask}) => {
    return (
        <Pressable onPress={() => onPressTask (item)}>
            <View style={styles.task} key={item.id}>
                <Text style={styles.taskText}> {item.task} </Text>
            </View>
        </Pressable>
        
    )
}

const MainScreen = ({ taskList }) => {

  const [list, setList] = useState(taskList)
  const [input,setInput] = useState("")
  const [modalVisible, setModalVisible] = useState(false);
  const [taskActive, setTaskActive] = useState({}) 

  const onAddTask = () => {
    console.log("se agrega una tarea");
    setList([
        ...list,
        {
            id: list.length + 1,
            task: input,
            completed: false
        }
    ])
  }

  const onPressTask = (task) => {
        setTaskActive(task)
        setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.container} >
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
      <View style={styles.view2}>
        <FlatList
            data = {list}
            keyExtractor = {item => item.id}
            renderItem = {({item}) => renderItemTask({item, onPressTask})} 
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{taskActive.task}</Text>
            <View style={styles.buttonContainer}>
                <Pressable
                style={[styles.button, styles.buttonDone]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyleButton}>Done</Text>
                </Pressable>
                <Pressable
                style={[styles.button, styles.buttonNotYet]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyleButton}>Not Yet</Text>
                </Pressable>
                <Pressable
                style={[styles.button, styles.buttonCancel]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyleButton}>Cancel</Text>
                </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
    view2: {
        height: '90%',
        backgroundColor: "lightgreen",
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 15,
    },
    task: {
        width: 300,
        backgroundColor: 'white',
        padding: 10,
        margin: 5
    },
    taskText: {
        textAlign: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    buttonDone: {
        backgroundColor: 'green',
        margin: 10,
    },
    buttonNotYet: {
        backgroundColor: 'red',
        margin: 10,
    },
    buttonCancel: {
        backgroundColor: 'grey',
        margin: 10,
    },
    textStyleButton: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    }
})