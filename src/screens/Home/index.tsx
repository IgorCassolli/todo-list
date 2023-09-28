import { TextInput, TouchableOpacity, View, Text, FlatList, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
//delete, pluscircleo, 
import { styles } from './styles'

import Logo from '../../../assets/Logo.png';
import Clipboard from '../../../assets/Clipboard.png';

export function Home(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={Logo}
                />
            </View>
            <View style={styles.content}>
                <View style={styles.form}>
                    <TextInput 
                        style={styles.input} 
                        placeholderTextColor="#808080"
                        placeholder='Adiciona uma nova tarefa'
                    />
                    <TouchableOpacity 
                        style={styles.button}
                    >
                    </TouchableOpacity>
                </View>
                <View style={styles.countList}>
                    <View style={styles.numberTasksContainer}>
                        <Text style={styles.tagTasksCreated}>Criadas</Text>
                        <Text style={styles.numberTasks}>0</Text>
                    </View>
                    <View style={styles.numberTasksContainer}>
                        <Text style={styles.tagTasksCompleted}>Concluídas</Text>
                        <Text style={styles.numberTasks}>0</Text>
                    </View>
                </View>
            
                <FlatList 
                    ListEmptyComponent={() => (
                        <View style={styles.listEmptyView}>
                            <Image 
                                source={Clipboard}
                            />
                            <Text style={styles.listEmptyTextBold}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={styles.listEmptyTextRegular}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    )}
                />
              
            </View>
        </View>
    )
}