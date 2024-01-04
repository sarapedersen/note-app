<script lang="ts">
	import { currentNote, notes } from '$lib/store';
	import { onMount } from 'svelte';
	import type { NoteType } from '../../types';
	import NoteIcon from '~icons/clarity/note-line';

	export let addNewNote: () => void;
	let sortValue = '';
	$: {
		$notes = $notes;
		sortNotes(sortValue);
	}

	function editNote(note: NoteType) {
		currentNote.update(() => note);
	}

	function handleChangeSortValue(event: Event) {
		sortValue = (event.target as HTMLSelectElement).value;
	}

	function sortNotes(option: string) {
		if (option === 'updatedDesc') {
			$notes = $notes.sort((a, b) => {
				if (a._updatedAt && b._updatedAt) {
					return new Date(b._updatedAt).getTime() - new Date(a._updatedAt).getTime();
				}
				return 0;
			});
		} else if (option === 'alphabetical') {
			$notes = $notes.sort((a, b) => {
				if (a.title && b.title) {
					return a.title.localeCompare(b.title);
				}
				return 0;
			});
		} else if (option === 'updatedAsc') {
			$notes = $notes.sort((a, b) => {
				if (a._updatedAt && b._updatedAt) {
					return new Date(a._updatedAt).getTime() - new Date(b._updatedAt).getTime();
				}
				return 0;
			});
		}
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
	<select class="list__sort" on:change={handleChangeSortValue}>
		<option>Sort By</option>
		<option value="updatedDesc">Newest</option>
		<option value="updatedAsc">Oldest</option>
		<option value="alphabetical">Alphabetical</option>
	</select>
</section>

<style lang="scss">
	.list {
		display: flex;
		flex-direction: column;
		height: 100vh;
		background-color: $gray-4;
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
				background-color: $gray-3;
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

			&:focus,
			&:hover {
				color: $gray-1;
			}
		}

		&__sort {
			background-color: $gray-3;
			color: $white;
			border: none;
			outline: none;
			margin-top: auto;
			padding: 0.5rem 1rem;
			border-radius: 0.5rem;
			cursor: pointer;
			border-right: 1rem solid transparent;
		}
	}
</style>
