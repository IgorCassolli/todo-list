import { useState, useEffect } from 'react';
import { TextInput, TouchableOpacity, View, Text, FlatList, Image, Alert } from 'react-native'
import { styles } from './styles';

import { AntDesign } from '@expo/vector-icons'; 

import Logo from '../../../assets/Logo.png';
import Clipboard from '../../../assets/Clipboard.png';

import { ItemList, TaskProps } from '../../components/ItemsList';

export function Home(){

    const [ tasks, setTasks] = useState<TaskProps[]>([]);
    const [ createdTasks, setCreatedTasks] = useState(0);
    const [ completedTasks, setCompletedTasks] = useState(0);
    const [ taskInput, setTaskInput ] = useState('');

    function handleAddNewTask(){

        if(taskInput.length < 1){
            return Alert.alert('Por favor insira uma tarefa', 'Insira uma tarefa para adicionar na lista.');
        }

        const newTask = {
            id: new Date().getTime(),
            description: taskInput,
            done: false
        }

        const taskAlreadyExists = tasks.filter(tasksExists => tasksExists.description === newTask.description);

        if(taskAlreadyExists.length > 0){
            return Alert.alert('Tarefa já existe', 'Essa tarefa já está inserida na lista.');
        }

        setTasks(oldTasks => [...oldTasks, newTask]);
        setTaskInput('');
    }

    function handleToggleTaskDone(id: number){
        const updatedTasks = tasks.map(task => ({ ...task }))
        const updateTask = updatedTasks.find(task => task.id === id);
        if(!updateTask){
            return;
        }
        
        updateTask.done = !updateTask.done;
        setTasks(updatedTasks);
    }

    function handleRemoveTask(id: number) {
        setTasks(oldTasks => oldTasks.filter(
            tasks => tasks.id !== id 
        ));
    }

    useEffect(() => {
        setCreatedTasks(tasks.length);
        setCompletedTasks(tasks.filter(tasksExists => tasksExists.done == true).length);
    }, [tasks])

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
                        onChangeText={setTaskInput}
                        value={taskInput}
                        style={styles.input} 
                        placeholderTextColor="#808080"
                        placeholder='Adiciona uma nova tarefa'
                    />
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={handleAddNewTask}
                    >
                    <AntDesign 
                        name='pluscircleo'
                        size={16}
                        style={{ color: '#F2F2F2'}}
                    />
                    </TouchableOpacity>
                </View>
                <View style={styles.countList}>
                    <View style={styles.numberTasksContainer}>
                        <Text style={styles.tagTasksCreated}>Criadas</Text>
                        <Text style={styles.numberTasks}>{createdTasks}</Text>
                    </View>
                    <View style={styles.numberTasksContainer}>
                        <Text style={styles.tagTasksCompleted}>Concluídas</Text>
                        <Text style={styles.numberTasks}>{completedTasks}</Text>
                    </View>
                </View>
            
                <FlatList 
                    data={tasks}
                    keyExtractor={tasks => tasks.description}
                    renderItem={({item}) => (
                        <ItemList
                            key={item.id}
                            description={item.description}
                            id={item.id}
                            done={item.done}
                            onRemoveTask={() => handleRemoveTask(item.id)}
                            onToggleTaskDone={() => handleToggleTaskDone(item.id)}
                        />
                      )}  
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