import type {
  PageServerLoad,
  Actions
} from './$types';
import { connect } from '$lib/server/db';
import { Todo } from '$lib/server/models';

export const prerender = false;

export const load: PageServerLoad = (async () => {
  await connect();
  const todos = await Todo.find().where('deleted').equals(false);

  return {
    todos: todos.map(todo => todo.toJSON({
      flattenObjectIds: true
    })),
  };
}) satisfies PageServerLoad;

export const actions: Actions = {
  create: async ({ request }) => {
    const payload = await request.formData();
    const name = payload.get('name');

    try {
      const todo = {
        name: name?.toString(),
        finished: false
      };

      await Todo.validate(todo);
      const result = await Todo.create(todo);
      return result.toJSON({ flattenObjectIds: true });
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  delete: async ({ request }) => {
    const data = await request.formData();
    const id = data.get('id');

    if (id) {
      await Todo.findByIdAndUpdate({ _id: id }, { deleted: true });
      return true;
    }

    return false;
  },

  update: async ({ request }) => {
    const data = await request.formData();
    const id = data.get('id');
    const finished = data.get('finished');
    console.log('finished', finished);
    

    if (id) {
      await Todo.findByIdAndUpdate({ _id: id }, { finished });
      return true;
    }

    return false;
  }
}