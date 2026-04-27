import { build, context } from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';
import { rm } from 'node:fs/promises';
import { readdirSync } from 'node:fs';
import { join, basename, extname } from 'node:path';

const isWatch = process.argv.includes('--watch');
const isProd = !isWatch && !process.argv.includes('--dev');

const blocksDir = 'src/css/blocks';
const blockEntries = Object.fromEntries(
	readdirSync(blocksDir)
		.filter((f) => /\.s?css$/.test(f))
		.map((f) => [`blocks/${basename(f, extname(f))}`, join(blocksDir, f)])
);

const cssConfig = {
	entryPoints: {
		styles: 'src/styles.css',
		editor: 'src/editor.css',
		...blockEntries,
	},
	outdir: 'assets/css',
	bundle: true,
	minify: isProd,
	sourcemap: !isProd,
	plugins: [sassPlugin()],
	logLevel: 'info',
};

const jsConfig = {
	entryPoints: { script: 'src/script.js' },
	outdir: 'assets/js',
	bundle: true,
	minify: isProd,
	sourcemap: !isProd,
	logLevel: 'info',
};

await rm('assets/css', { recursive: true, force: true });
await rm('assets/js', { recursive: true, force: true });

if (isWatch) {
	const [cssCtx, jsCtx] = await Promise.all([
		context(cssConfig),
		context(jsConfig),
	]);
	await Promise.all([cssCtx.watch(), jsCtx.watch()]);
	console.log('Watching for changes. Press Ctrl+C to stop.');
} else {
	await Promise.all([build(cssConfig), build(jsConfig)]);
}
