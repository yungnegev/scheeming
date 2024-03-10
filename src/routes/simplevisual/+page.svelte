<script>
    let { data } = $props();


    $effect(() => {
		console.log(data.users);
	});
</script>


{#each data.users as user}
    <div>{user.firstName}</div>
{/each}