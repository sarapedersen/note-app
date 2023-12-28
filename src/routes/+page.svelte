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
</svelte:head>

<main class="notes">
	<NoteList {notes} />

	<div class="note">
		<textarea bind:value={newNote} placeholder="New note"></textarea>
		<button on:click={addNote}>Save</button>
	</div>
</main>

<style lang="scss">
	.notes {
		display: grid;
		grid-template-columns: 2fr 5fr;
	}
</style>
