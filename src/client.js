import { createClient } from '@sanity/client';

export const config = {
	apiVersion: '2023-12-21',
	projectId: 'rs2qhnk3',
	dataset: 'production',
	useCdn: false,
	token: import.meta.env.VITE_SANITY_TOKEN,
	ignoreBrowserTokenWarning: true,
};

export const client = createClient(config);
