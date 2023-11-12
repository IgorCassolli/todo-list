import { View, Text, TouchableOpacity } from "react-native"
import { AntDesign, Entypo } from "@expo/vector-icons";
import { styles } from './styles';

export interface TaskProps {
    id: number;
    done: boolean;
    description: string;
}

interface taskListProps {
    id: number;
    done: boolean;
    description: string;
    onRemoveTask: (id: number) => void;
    onToggleTaskDone: (id: number) => void;
}

export function ItemList( { id, done, description, onRemoveTask, onToggleTaskDone } : taskListProps){

    return (
        <View style={styles.container}>
            {done ?
                <>
                    <TouchableOpacity>
                        <AntDesign 
                        onPress={() => onToggleTaskDone(id)}    
                            name='checkcircle'
                            size={16}
                            style={{ color: '#5E60CE' }}  
                                        
                        />
                    </TouchableOpacity>
                    <Text style={styles.itemDescriptionDone}>{description}</Text>
                </>
                
                : 

                <>
                    <TouchableOpacity>
                        <Entypo 
                        onPress={() => onToggleTaskDone(id)}    
                            name='circle'
                            size={16}
                            style={{ color: '#4EA8DE'}}  
                            
                        />
                    </TouchableOpacity> 
                    <Text style={styles.itemDescription}>{description}</Text>
                </>
            }
            
            <TouchableOpacity
                onPress={() => onRemoveTask(id)}
            >
                <AntDesign 
                    name='delete'
                    size={16}
                    style={{ color: '#808080'}}
                />
            </TouchableOpacity>
            
        </View>
    )
}