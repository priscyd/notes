import { useState } from "react"
import { Modal, Text, View, TouchableOpacity } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import useNoteStore from "~/store/store"
import { nanoid } from "nanoid/non-secure"

type ViewNoteModalProps ={
    visible : boolean,
    setVisible : (visible: boolean)=>void
}


const AddNoteModal = ({visible, setVisible}:ViewNoteModalProps) =>{

    const [note, setNote] = useState('')

    const { addNote } = useNoteStore()

    const handleAddNote= ()=>{
        /**
         * 
         * Add note
         */
        const newNote = {
            id: nanoid(),
            title: note
        }
        addNote(newNote)
        setVisible(false)
    }


return (
    <Modal visible={visible} transparent={true} className="z-100">
        <View className="bg-black/50 flex-1 items-center justify-center">
        <View className="bg-white p-6 rounded-xl w-[80%] space-y-4">
            <Text className="text-xl font-medium text-primary capitalize ">New note</Text>
            <TextInput placeholder="Create a note" placeholderTextColor={"grey"} className=" mt-2 border-b border-primary py-4 bg-white text-xl rounded " onChangeText={setNote}/>
            <View className=" flex-row w-full justify-between mt-4 py-4 items-center">
                <TouchableOpacity 
                    onPress={() => setVisible(false)}
                    className="bg-gray-200 px-6 py-2 rounded-lg"
                >
                    <Text className="text-gray-700 font-medium">Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={handleAddNote}
                    className="bg-primary px-6 py-2 rounded-lg"
                >
                    <Text className="text-white font-medium">Add</Text>
                </TouchableOpacity>
            </View>
        </View>

        </View>
    </Modal>
)
}

export default AddNoteModal