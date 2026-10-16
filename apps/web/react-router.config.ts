import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: 'src',
	buildDirectory: '../../dist/apps/web',
	prerender: ['/', '/products', '/about', '/process', '/contact', '/privacy', '/terms'],
} satisfies Config;
