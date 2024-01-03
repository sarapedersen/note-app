import { createClient } from '@sanity/client';
import { z } from 'zod';

	const NoteSchema = z.object({
		_id: z.string(),
		title: z.string(),
		body: z.string()
	});

	const client = createClient({
		apiVersion: '2023-12-21',
		projectId: 'rs2qhnk3',
		dataset: 'production',
		useCdn: false
	});

	export async function load() {
		const query = `
		*[_type == "note"] {
			_id,
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