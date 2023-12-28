<script>
	export let notes;
</script>

<section class="notes">
	<h1>Notes</h1>
	<ul>
		{#each notes as note}
			<li>{note}</li>
		{/each}
	</ul>
</section>

<style>
	.notes {
	}
</style>
