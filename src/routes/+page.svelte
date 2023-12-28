<script lang="ts">
	import NoteList from './Notelist.svelte';

	let newNote = '';
	let notes = ['My first note', 'My second note'];

	function addNote() {
		notes = [...notes, newNote];
	}
</script>

<svelte:head>
	<title>Notes</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="notes">
	<NoteList {notes} />

	<div>
		<!-- <input bind:value={newNote} type="text" placeholder="New note">
        <button on:click={addNote}>Add</button> -->
	</div>
</main>

<style lang="scss">
	.notes {
		display: grid;
		grid-template-columns: 1fr 5fr;
	}
</style>
