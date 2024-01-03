<script lang="ts">
	import NoteList from '$lib/components/Notelist.svelte';
	import Note from '$lib/components/Note.svelte';
	import { currentNote, notes } from '$lib/store';
	import type { NoteType } from '../types';
	import type { PageData } from './$types';
	import { v4 as uuidv4 } from 'uuid';

	export let data: PageData;
	notes.set(data.notes);

	let activeNote = false;

	function handleNewNote() {
		let blankNote: NoteType = {
			_id: uuidv4(),
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
		display: flex;
		background-color: $gray-2;
	}
</style>
