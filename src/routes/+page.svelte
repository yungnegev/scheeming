<script>

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="main-section">
	<ul class="index">
		<li><a href="/simplevisual">[1] simplevisual</a></li>
	</ul>
</section>

<style>
	.index {
		padding: 0;
		list-style: none;
		width: 100%;
	}
	a {
		text-decoration: none;
		color: var(--color-text);
		font-weight: 600;
		width: 100%;
	}
	li {
		display: flex;
		align-items: center;
		padding: 4px 2px;
		width: 100%;
		transition: all 150ms ease;
	}

	li:hover {
		background-color: #121212;
	}
</style>
