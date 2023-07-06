import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import TopBar from '../Components/TopBar'
import TaskList from '../Components/TaskList'
import ModalTask from '../Components/Modal'

const MainScreen = ({ taskList }) => {

  const [list, setList] = useState(taskList)
  const [input,setInput] = useState("")
  const [modalVisible, setModalVisible] = useState(false);
  const [taskActive, setTaskActive] = useState({}) 

  const onAddTask = () => {
    if (input !== "") {
        setList([
            ...list,
            {
                id: list.length + 1,
                task: input,
                completed: false
            }
        ]);
        setInput("");
    }
  }

  const onPressTask = (task) => {
        setTaskActive(task)
        setModalVisible(!modalVisible)
  }

  const onDeleteTask = (taskId) => {
    setList(prevList => prevList.filter(task => task.id !== taskId));
  }

  const onPressStatus = (status) => {
    console.log("Se presiona DONE")
    const remainTask = list.filter(taskList => taskList.id !== taskActive.id)
    const orderedList = [
        ...remainTask,
        {
            ...taskActive,
            completed: status
        }
    ].sort( function (a, b) {
        if (a.id > b.id) {
            return 1;
        }
        if (a.id < b.id) {
            return -1;
        }
        return 0;
    })
    console.log(taskActive)
    setList(orderedList)
    setModalVisible(!modalVisible)
  }
  console.log(list)
  return (
    <View style={styles.container}>
      <TopBar
        input={input}
        onAddTask={onAddTask}
        setInput={setInput}/>

      <TaskList
        list={list}
        onPressTask={onPressTask}
        onDeleteTask={onDeleteTask}/>

      <ModalTask
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        taskActive={taskActive}
        onPressStatus={onPressStatus}/>

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
})