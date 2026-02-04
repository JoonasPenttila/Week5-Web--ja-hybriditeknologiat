import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  task: {
    id: string;
    text: string;
    done: boolean;
  };
  onToggle: () => void;
};

export default function TaskItem({ task, onToggle }: Props) {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.row}>
      <Text style={[styles.text, task.done && styles.done]}>
        {task.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#000', // musta viiva
  },
  text: {
    fontSize: 18,
    color: '#000', // musta teksti
  },
  done: {
    textDecorationLine: 'line-through',
  },
});
