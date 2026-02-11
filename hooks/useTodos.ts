import { useReducer } from "react";

export type Task = {
  id: string;
  text: string;
  done: boolean;
};

type State = {
  tasks: Task[];
};

type Action =
  | { type: "ADD"; payload: string }
  | { type: "TOGGLE"; payload: string };

const initialState: State = {
  tasks: [],
};

function taskReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD":
      if (!action.payload.trim()) return state;
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now().toString(),
            text: action.payload,
            done: false,
          },
        ],
      };

    case "TOGGLE":
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload ? { ...t, done: !t.done } : t
        ),
      };

    default:
      return state;
  }
}

export function useTodos() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addTask = (text: string) => {
    dispatch({ type: "ADD", payload: text });
  };

  const toggleTask = (id: string) => {
    dispatch({ type: "TOGGLE", payload: id });
  };

  return {
    tasks: state.tasks,
    addTask,
    toggleTask,
  };
}
