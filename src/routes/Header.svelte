<script>
	import { page } from '$app/stores';
	import { count } from './todo/+page.svelte';
	import logo from '$lib/images/logo.png';
	import { base } from "$app/paths";
</script>

<header class="navbar">
	<section class="navbar-section">
		<a
			href="{base}/todo"
			class="btn btn-link"
			aria-current={$page.url.pathname.startsWith('/todo') ? 'page' : undefined}
		>
			<span class="badge" data-badge="{$count}">Todo</span>
		</a>
		<a
			href="{base}/about"
			class="btn btn-link"
			aria-current={$page.url.pathname.startsWith('/about') ? 'page' : undefined}>About</a
		>
		<a
			href="{base}/sverdle"
			class="btn btn-link"
			aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>Game</a
		>		
	</section>
	<section class="navbar-center">
		<figure class="s-circle">
			<img src="{logo}" alt="Logo" />
		</figure>
	</section>
	<section class="navbar-section">
		<span class="text-tiny">Created by Chris</span>
	</section>
</header>

<style>
	figure {
		display: flex;
		overflow: hidden;
		margin: 0;
	}

	img {
		height: 50px;
		transform: scale(1.2);
	}

	header {
		padding: 1em;
		background-color: #222831;
		color: #EEEEEE;
	}

	[aria-current="page"] {
		font-weight: bold;
	}
</style>
