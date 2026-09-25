// Shared bundle-count labels for the games page.
export const bundleLabel = (count: number) => `${count} ${count === 1 ? 'bundle' : 'bundles'}`;

// 30+ bundles: clearly open to bundling. 10–29: open. Under 10: selective.
export const bundleVariant = (count: number) => (count >= 30 ? 'success' : count >= 10 ? 'caution' : 'default');

export const steamUrl = (appId: number) => `https://store.steampowered.com/app/${appId}/`;
