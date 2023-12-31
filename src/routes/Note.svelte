<script lang="ts">
	import { notes, currentNote } from '$lib/store';

	function save() {
		const existingNote = $notes.find((note) => note.id === $currentNote.id);
		if (existingNote) {
			$notes = $notes.map((note) => (note.id === $currentNote.id ? $currentNote : note));
		} else {
			$notes = [...$notes, $currentNote];
		}
	}
</script>

<section class="note">
	<input class="note__title" placeholder="Title" bind:value={$currentNote.title} />
	<textarea class="note__textarea" placeholder="New note" bind:value={$currentNote.body}></textarea>
	<button class="note__save" on:click={save}>Save</button>
</section>

<style lang="scss">
	.note {
		display: flex;
		flex-direction: column;
		padding: 1rem;

		&__title {
			font-size: 1.2rem;
			font-weight: bold;
			margin-bottom: 1rem;
			padding: 1rem;
			border: 1px solid #ccc;
			border-radius: 0.5rem;
		}

		&__textarea {
			width: 100%;
			height: 100%;
			padding: 1rem;
			border: 1px solid #ccc;
			border-radius: 0.5rem;
		}
		&__save {
			margin-top: 1rem;
			padding: 1rem;
			width: 10rem;
			align-self: flex-end;
			border: 1px solid #ccc;
			border-radius: 0.5rem;
		}
	}
</style>
