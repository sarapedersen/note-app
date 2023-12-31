<script lang="ts">
	import { notes, currentNote } from '$lib/store';
	import type { NoteType } from '../types';

	export let addNewNote: () => void;

	function editNote(note: NoteType) {
		currentNote.update(() => note);
	}
</script>

<section class="list">
	<h1>Notes</h1>
	<ul>
		{#each $notes as note}
			<div class="list__row">
				<li>{note.title}</li>
				<button on:click={() => editNote(note)} class="row__button">edit</button>
			</div>
		{/each}
	</ul>
	<button on:click={addNewNote} class="list__button">Add new note</button>
</section>

<style lang="scss">
	.list {
		display: flex;
		flex-direction: column;
		height: 100vh;
		background-color: rgb(224, 232, 234);
		padding: 1rem;

		&__row {
			list-style: none;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0.5rem;
			border-bottom: 1px solid #ccc;

			.row__button {
				cursor: pointer;
				padding: 0.2rem;
				border: none;
				background-color: transparent;
			}
		}
		&__button {
			padding: 1rem;
			border: 1px solid #ccc;
			border-radius: 0.5rem;
			position: fixed;
			bottom: 1rem;
		}
	}
</style>
