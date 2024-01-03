<script lang="ts">
	import { currentNote, notes } from '$lib/store';
	import type { NoteType } from '../../types';
	import NoteIcon from '~icons/clarity/note-line';

	export let addNewNote: () => void;

	function editNote(note: NoteType) {
		currentNote.update(() => note);
	}
</script>

<section class="list">
	<h1>Notes</h1>
	<button class="list__button" on:click={addNewNote}>
		<NoteIcon font-size="25px" />
	</button>
	<ul>
		{#each $notes as note}
			<button
				on:click={() => editNote(note)}
				class="list__row {note === $currentNote ? 'list__row--active' : ''}"
			>
				<li>{note.title}</li>
			</button>
		{/each}
	</ul>
</section>

<style lang="scss">
	.list {
		display: flex;
		flex-direction: column;
		height: 100vh;
		background-color: $gray-3;
		color: $white;
		padding: 2rem 1.5rem;
		width: 20rem;
		min-width: 20rem;
		position: relative;

		h1 {
			color: $orange-2;
		}

		&__row {
			background-color: transparent;
			list-style: none;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 1rem 0.5rem;
			border: none;
			color: $white;
			width: 100%;
			cursor: pointer;

			&--active {
				background-color: $gray-2;
				border-radius: 0.5rem;
				border: none;
			}

			&:first-child {
				margin-top: 1rem;
			}
		}
		&__button {
			display: flex;
			background-color: transparent;
			color: $orange-2;
			align-items: center;
			gap: 0.5rem;
			border: none;
			outline: none;
			position: absolute;
			right: 1.5rem;
			cursor: pointer;
		}
	}
</style>
