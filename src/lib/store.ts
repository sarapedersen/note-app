import { writable } from 'svelte/store';
import type { Note } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const notes = writable<Note[]>([
	{ id: uuidv4(), title: 'first note from store', body: 'This is the body' }
]);
export const currentNote = writable<Note | null>(null);
