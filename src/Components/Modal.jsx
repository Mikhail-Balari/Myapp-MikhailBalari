import { StyleSheet, Text, View, Modal, Pressable} from 'react-native'
import React from 'react'

const ModalTask = ({
    modalVisible,
    taskActive,
    setModalVisible,
    onPressStatus
}) => {
  return (
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
                onPress={() => onPressStatus(true)}>
                <Text style={styles.textStyleButton}>Done</Text>
                </Pressable>

                <Pressable
                style={[styles.button, styles.buttonNotYet]}
                onPress={() => onPressStatus(false)}>
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
  )
}

export default ModalTask

const styles = StyleSheet.create({
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