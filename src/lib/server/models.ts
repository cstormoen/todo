import mongoose from "mongoose";
const { Schema, model } = mongoose;

interface ITodo {
  name: string;
  finished: boolean;
  deleted?: boolean;
}

/**
   * Each schema maps to a MongoDB collection and 
   * defines the shape of the documents within that collection.
   */
const TodoSchema = new Schema<ITodo>({
  name: { type: String, required: true },
  finished: { type: Boolean, required: true },
  deleted: { type: Boolean, default: false, required: false }
});

export const Todo = model<ITodo>('Todo', TodoSchema);