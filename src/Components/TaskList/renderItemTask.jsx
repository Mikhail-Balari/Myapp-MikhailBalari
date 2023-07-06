import { StyleSheet, Text, View, Pressable, TouchableOpacity} from 'react-native'
import React from 'react'

const RenderItemTask = ({item, onPressTask, onDeleteTask}) => {
  return (
    <View style={item.completed ? styles.taskDone : styles.task}>
      <View key={item.id}>
        <Pressable onPress={() => onPressTask(item)}>
            <Text style={styles.taskText}>{item.task}</Text>
        </Pressable>
      </View>
      <View style={styles.deleteButtonContainer}>
        <TouchableOpacity style={styles.deleteButton} onPress={() => onDeleteTask(item.id)}>
                <Text style={styles.deleteText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RenderItemTask

const styles = StyleSheet.create({
    task: {
        width: 300,
        backgroundColor: 'white',
        padding: 10,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    taskText: {
        textAlign: 'left'
    },
    deleteButtonContainer: {
        marginLeft: 10
    },
    deleteButton: {
        paddingHorizontal: 10,
        width: 60,
        backgroundColor: 'black',
        borderRadius: 3,
        alignItems: 'center',
        padding: 5
    },
    deleteText: {
        color: 'white'
    },
    taskDone: {
        width: 300,
        padding: 10,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'lawngreen'
    },
    taskNotYet: {
        backgroundColor: 'gold'
    }
    
})