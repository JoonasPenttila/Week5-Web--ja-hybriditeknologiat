import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import TaskItem from './components/TaskItem';
import { useTodos } from './hooks/useTodos';

export default function App() {
  const { tasks, addTask, toggleTask } = useTodos();
  const [input, setInput] = useState('');

  const handleAdd = () => {
    addTask(input);
    setInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo list</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={input}
        onChangeText={setInput}
      />

      <Button title="Save" onPress={handleAdd} />

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={() => toggleTask(item.id)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: '600',
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 10,
  },
});
