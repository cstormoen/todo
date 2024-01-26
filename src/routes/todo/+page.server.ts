import type {
  PageServerLoad,
  Actions
} from './$types';
import type { Todo } from './todo';

export const prerender = false;

let todos: Todo[] = [
  {
    id: 6,
    name: 'create at least two components',
    finished: true
  },
  {
    id: 5,
    name: 'add a button to delete todo',
    finished: true
  },
  {
    id: 4,
    name: 'add a checkbox with binding to finished',
    finished: true
  },
  {
    id: 3,
    name: 'add a form for adding new todo',
    finished: true
  },
  {
    id: 2,
    name: 'add an unordered list of todos',
    finished: true
  },
  {
    id: 1,
    name: 'create a new svelte project',
    finished: true
  }
];

export const load: PageServerLoad = (() => {
  return {
    todos,
  };
}) satisfies PageServerLoad;

export const actions: Actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    const todo = data.get('todo');

    if (todo) {
      console.log(todo);
      todos = [
        {
          id: todos.length + 1,
          name: todo.toString(),
          finished: false
        },
        ...todos,
      ]
    }

    return true
  },

  delete: async ({request}) => {
    const data = await request.formData();
    const id = data.get('id');

    if (id) {
      const idAsNumber = Number.parseInt(id.toString());
      todos = todos.filter(todo => todo.id !== idAsNumber);

    }

    return true   
  }
}