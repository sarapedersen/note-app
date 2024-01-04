<script lang="ts">
	import { notes, currentNote } from '$lib/store';
	import { client } from '../../client';
	import DeleteIcon from '~icons/ic/twotone-delete';

	function saveNote() {
		if ($currentNote.title.length < 1) {
			$currentNote.title = 'Untitled';
		}

		const existingNote = $notes.find((note) => note._id === $currentNote._id);
		if (existingNote) {
			$notes = $notes.map((note) => (note._id === $currentNote._id ? $currentNote : note));
			client
				.patch($currentNote._id)
				.set({ title: $currentNote.title, body: $currentNote.body })
				.commit();
		} else {
			$notes = [...$notes, $currentNote];
			client.create({ _type: 'note', title: $currentNote.title, body: $currentNote.body });
		}
	}

	function deleteNote() {
		$notes = $notes.filter((note) => note._id !== $currentNote._id);
		client.delete($currentNote._id);
		currentNote.set(null);
	}
</script>

<section class="note">
	{#if $currentNote}
		<div class="note__first-row">
			<input class="note__title" placeholder="Title" bind:value={$currentNote.title} />
			<button class="note__delete" on:click={deleteNote}>
				<DeleteIcon class="delete__icon" font-size="35px" />
			</button>
		</div>
		<textarea class="note__textarea" placeholder="New note" bind:value={$currentNote.body}
		></textarea>
		<div class="note__bottom-row">
			{#if $currentNote._updatedAt}
				<div class="note__date">
					Last updated: <time
						>{new Date($currentNote._updatedAt).toLocaleString('en-US', {
							day: 'numeric',
							month: 'short',
							year: 'numeric',
							hour: 'numeric',
							minute: 'numeric',
							hour12: false
						})}</time
					>
				</div>
			{/if}
			<button class="note__save" on:click={saveNote}>Save</button>
		</div>
	{/if}
</section>

<style lang="scss">
	.note {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		width: 100%;
		background-color: $gray-3;

		&__first-row {
			display: flex;
			align-items: center;
			margin-bottom: 1rem;

			.note__title {
				font-size: 1.2rem;
				font-weight: bold;
				width: 100%;
			}

			.note__delete {
				cursor: pointer;
				background-color: transparent;
				border: none;
				color: $button-secondary;
				height: fit-content;
				margin-left: 0.5rem;
			}
		}

		&__title,
		&__textarea {
			padding: 1rem;
			border: 1px solid #ccc;
			border-radius: 0.5rem;
			border: 1px solid $gray-2;
			background-color: $gray-2;
			color: $white;
			font-size: 1.05rem;
		}

		&__textarea {
			width: 100%;
			height: 100%;
		}

		&__bottom-row {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 1rem;

			.note__date {
				color: $white;
				display: flex;
				flex-direction: column;
				gap: 0.2rem;
			}
			.note__save {
				cursor: pointer;
				margin-top: 1rem;
				padding: 0.5rem;
				width: 8rem;
				align-self: flex-end;
				border: 1px solid $button-primary;
				border-radius: 0.5rem;
				background-color: $button-primary;
			}
		}
	}
</style>
