<script context="module" lang="ts">
	import { writable } from 'svelte/store';
	export const count = writable(0);
</script>

<script lang="ts">
	interface Todo {
		id: number;
		name: string;
		finished: boolean;
	}

	let newTodo = '';
	let todos: Todo[] = [
		{
			id: 1,
			name: 'add a form for adding new todo',
			finished: true
		},
		{
			id: 2,
			name: 'add a checkbox with binding to finished',
			finished: true
		},
		{
			id: 3,
			name: 'add an unordered list of todos',
			finished: true
		},
		{
			id: 4,
			name: 'create a new svelte project',
			finished: true
		},
		{
			id: 5,
			name: 'create at least two components',
			finished: true
		}
	].reverse();

	$: {
		count.set(todos.filter((todo) => !todo.finished).length);
	}

	function addTodo() {
		todos = [
			{
				id: todos.length,
				name: newTodo,
				finished: false
			},
			...todos
		];

		newTodo = '';
	}

	function remove(todoId: number) {
		todos = todos.filter((t) => t.id !== todoId);
	}
</script>

<svelte:head>
	<title>Todo</title>
	<meta name="description" content="Tasks that needs to be done." />
</svelte:head>

<div>
	<h1>Todo</h1>

	<p>You have {$count} of unfinished tasks!</p>

	<form on:submit={addTodo}>
		<div class="input-group">
			<input class="form-input" type="text" bind:value={newTodo} />
			<button type="submit" class="btn btn-primary input-group-btn">Add</button>
		</div>
	</form>

	<ul>
		{#each todos as todo}
			<li>
				<input type="checkbox" bind:checked={todo.finished} placeholder="Add your todo.." />
				<span class:finished={todo.finished}>{todo.name}</span>
				<button class="btn btn-error btn-sm" type="button" on:click={() => remove(todo.id)}
					>delete</button
				>
			</li>
		{/each}
	</ul>
</div>

<style>
	ul {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		margin: 16px 0 0 0;
	}

	li {
		padding-bottom: 0.3rem;
	}

	li span.finished {
		text-decoration: line-through;
	}

	li button {
		visibility: hidden;
	}

	li:hover button {
		visibility: visible;
	}

	form {
		display: flex;
	}

	.input-group {
		flex: 1;
	}
</style>
