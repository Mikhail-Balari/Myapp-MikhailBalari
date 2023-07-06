import { StyleSheet, View, FlatList} from 'react-native'
import React from 'react'

const TaskList = (
    list,
    onPressTask
) => {
  return (
    <View style={styles.view2}>
        <FlatList
            data = {list}
            keyExtractor = {task => task.id}
            renderItem = {({item}) => renderItemTask({item, onPressTask})} 
        />
    </View>
  )
}

export default TaskList

const styles = StyleSheet.create({
    view2: {
        height: '90%',
        backgroundColor: "lightgreen",
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 15,
    },
})