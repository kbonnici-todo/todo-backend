export type Todo = {
  description: string;
  isDone: boolean;
};

const _todos: Todo[] = [
  {
    description: "hello world",
    isDone: false,
  },
  {
    description: "goodbye world",
    isDone: true,
  },
];

export function fetchTodos(): Todo[] {
  // TODO: fetch todos from DB
  return _todos;
}
