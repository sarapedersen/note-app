import { createClient } from '@sanity/client';


	export const config = {
		apiVersion: '2023-12-21',
		projectId: 'rs2qhnk3',
		dataset: 'production',
		useCdn: false,
		token: 'sk0Lvhjq4dhQfBHThRXJllLCQznDWuDSCQG90IOnaL8MKtdAbKC05jwNTbvzRkw8K9Nse5qzTY2R18mYT2ly3EbuGciwed3bsq2UCVtJelRDcKtd0leYfIekf6lgSr2GCawOtd2vzlKPELl7Gi7idLnQsyXDmRl8lE6ukvnZdXP07zOqcZoo',
		ignoreBrowserTokenWarning: true
	};

	export const client = createClient(config);