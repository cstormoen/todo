<script context="module" lang="ts">
	import { writable } from 'svelte/store';
	export const count = writable(0);
</script>

<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';
	import type { ActionResult } from '@sveltejs/kit';
	import { invalidateAll } from '$app/navigation';
	import { applyAction, deserialize } from '$app/forms';

	export let data: PageData;

	let newTodo = '';

	$: {
		count.set(data.todos.filter((todo) => !todo.finished).length);
	}

	async function addTodo(event: { currentTarget: EventTarget & HTMLFormElement }) {
		const formData = new FormData(event.currentTarget);

		const response = await fetch(event.currentTarget.action, {
			method: 'POST',
			body: formData
		});

		const result: ActionResult = deserialize(await response.text());

		if (result.type === 'success') {
			await invalidateAll();
		}

		applyAction(result);
		newTodo = '';
	}

	async function deleteTodo(event: { currentTarget: EventTarget & HTMLFormElement }) {
		const formData = new FormData(event.currentTarget);

		const response = await fetch(event.currentTarget.action, {
			method: 'POST',
			body: formData
		});

		const result: ActionResult = deserialize(await response.text());

		if (result.type === 'success') {
			await invalidateAll();
		}

		applyAction(result);
	}
</script>

<svelte:head>
	<title>Todo</title>
	<meta name="description" content="Tasks that needs to be done." />
</svelte:head>

<div>
	<h1>Todo</h1>

	<p>You have {$count} unfinished todos!</p>

	<form method="POST" action="?/create" on:submit|preventDefault={addTodo}>
		<div class="input-group">
			<input
				class="form-input"
				name="todo"
				type="text"
				bind:value={newTodo}
				placeholder="Your todo"
			/>
			<button type="submit" class="btn btn-primary input-group-btn">Add</button>
		</div>
	</form>

	<ul>
		{#each data.todos as todo (todo.id)}
			<li in:fly={{ y: -20, duration: 500 }} out:fly={{ y: 200, duration: 1200 }}>
				<input type="checkbox" bind:checked={todo.finished} placeholder="Add your todo.." />
				<span class:finished={todo.finished}>{todo.name}</span>
				<form method="POST" action="?/delete" on:submit|preventDefault={deleteTodo}>
					<input type="hidden" name="id" value="{todo.id}">
					<button class="btn btn-error btn-sm" type="submit">Delete</button>
				</form>
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
		gap: 0.5rem;
	}

	li input {
		flex: 0 0 15px;
	}

	li span {
		flex: 1 1 auto;
	}

	li span.finished {
		text-decoration: line-through;
	}

	form {
		display: flex;
	}

	.input-group {
		flex: 1;
	}
</style>
