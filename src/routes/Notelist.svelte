<script lang="ts">
	export let notes: string[];
</script>

<section class="list">
	<h1>Notes</h1>
	<ul>
		{#each notes as note}
			<li>{note}</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	.list {
		height: 100vh;
		background-color: aliceblue;
		padding: 1rem;

		ul {
			list-style: none;

			li {
				padding: 0.5rem;
				border-bottom: 1px solid #ccc;
			}
		}
	}
</style>
