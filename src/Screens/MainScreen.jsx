import { StyleSheet, Text, View, Modal, Pressable} from 'react-native'
import React from 'react'
import { useState } from 'react'
import TopBar from '../Components/TopBar'
import TaskList from '../Components/TaskList'





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
    <View style={styles.container}>
      <TopBar
        input={input}
        onAddTask={onAddTask}
        setInput={setInput}/>
      <TaskList
        list={list}
        onPressTask={onPressTask}/>

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