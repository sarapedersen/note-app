<script lang="ts">
	import NoteList from './Notelist.svelte';
	import Note from './Note.svelte';
	import { currentNote } from '$lib/store';
	import type { NoteType } from '../types';
	import { v4 as uuidv4 } from 'uuid';

	let activeNote = false;

	function handleNewNote() {
		let blankNote: NoteType = {
			id: uuidv4(),
			title: '',
			body: ''
		};

		currentNote.set(blankNote);
		activeNote = true;
	}
</script>

<main class="notes">
	<NoteList addNewNote={handleNewNote} />
	{#if $currentNote || activeNote}
		<Note />
	{/if}
</main>

<style lang="scss">
	.notes {
		display: grid;
		grid-template-columns: 2fr 5fr;
	}
</style>
