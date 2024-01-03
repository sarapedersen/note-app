import { client } from '../client.js';
import { z } from 'zod';

const NoteSchema = z.object({
	_id: z.string(),
	_updatedAt: z.string(),
	title: z.string(),
	body: z.string()
});

export async function load() {
	const query = `
    *[_type == "note"] {
        _id,
		_updatedAt,
        title,
        body,
      }`;
	let data = await client.fetch(query);
	if (data) {
		data = NoteSchema.array().parse(data);
		return {
			notes: data
		};
	}
	return {
		status: 500,
		body: new Error('Could not load notes')
	};
}
