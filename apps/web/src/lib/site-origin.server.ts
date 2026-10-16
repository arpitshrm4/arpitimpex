const LOCAL_HOSTNAMES = new Set(['localhost', '127.0.0.1', '0.0.0.0', '[::1]']);

export const CANONICAL_ORIGIN = 'https://arpitimpex.com';

export const siteOrigin = (request?: Request): string => {
	if (!request) return CANONICAL_ORIGIN;
	const { host, hostname } = new URL(request.url);

	if (LOCAL_HOSTNAMES.has(hostname)) {
		return `http://${host}`;
	}

	return CANONICAL_ORIGIN;
};
