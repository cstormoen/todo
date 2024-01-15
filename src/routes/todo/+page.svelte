<script context="module" lang="ts">
	import { writable } from 'svelte/store';
	export const count = writable(0);
</script>

<script lang="ts">
	import { fly } from 'svelte/transition';

	interface Todo {
		id: number;
		name: string;
		finished: boolean;
	}

	let newTodo = '';
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

	$: {
		count.set(todos.filter((todo) => !todo.finished).length);
	}

	function addTodo() {
		todos = [
			{
				id: todos.length + 1,
				name: newTodo,
				finished: false
			},
			...todos,
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

	<p>You have {$count} unfinished todos!</p>

	<form on:submit={addTodo}>
		<div class="input-group">
			<input class="form-input" type="text" bind:value={newTodo} />
			<button type="submit" class="btn btn-primary input-group-btn">Add</button>
		</div>
	</form>

	<ul>
		{#each todos as todo (todo.id)}
			<li in:fly={{ y: -20, duration: 500 }} out:fly={{ y: 200, duration: 1200 }}>
				<input type="checkbox" bind:checked={todo.finished} placeholder="Add your todo.." />
				<span class:finished={todo.finished}>{todo.name}</span>
				<button class="btn btn-error btn-sm" type="button" on:click={() => remove(todo.id)}
					>Delete</button
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
		display: flex;
		align-items: center;
	}

	li input {
		flex: 0 0 15px;
		margin-right: 1rem;
	}

	li span {
		flex: 0 1 auto;
		margin-right: 0.5rem;
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
