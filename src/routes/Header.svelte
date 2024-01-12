<script>
	import { page } from '$app/stores';
	import { count } from './todo/+page.svelte';
	import logo from '$lib/images/logo.png';
</script>

<header class="navbar">
	<section class="navbar-section">
		<a
			href="/todo"
			class="btn btn-link"
			aria-current={$page.url.pathname.startsWith('/todo') ? 'page' : undefined}
		>
			Todo ({$count})
		</a>
		<a
			href="/about"
			class="btn btn-link"
			aria-current={$page.url.pathname.startsWith('/about') ? 'page' : undefined}>About</a
		>
		<a
			href="/sverdle"
			class="btn btn-link"
			aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>Sverdle</a
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
