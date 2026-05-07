import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP_DIR = path.join(ROOT, 'apps', 'myapp');
const SRC_DIR = path.join(APP_DIR, 'src');
const SCREEN_DIR = path.join(SRC_DIR, 'screens');
const PALETTE_DIR = path.join(SRC_DIR, 'generated', 'palettes');
const COPY_DIR = path.join(SRC_DIR, 'generated', 'copy');
const LAYOUT_DIR = path.join(SRC_DIR, 'generated', 'layouts');
const SCREEN_COUNT = 1400;

const containerClasses = [
	'flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200',
	'grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl',
	'flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300',
	'flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg',
	'flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2',
	'absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90',
	'relative flex p-8 bg-indigo-50 rounded shadow-2xl',
	'flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md',
];

const swatchClasses = [
	'size-4 bg-blue-100 rounded-full',
	'size-5 bg-blue-200 rounded-full',
	'size-6 bg-blue-300 rounded-full',
	'size-7 bg-blue-400 rounded-full',
	'size-8 bg-blue-500 rounded-full',
	'size-9 bg-blue-600 rounded-full',
	'size-10 bg-blue-700 rounded-full',
	'size-11 bg-blue-800 rounded-full',
	'size-12 bg-blue-900 rounded-full',
	'size-13 bg-emerald-500 rounded-full',
	'size-14 bg-amber-500 rounded-full',
	'size-15 bg-rose-500 rounded-full',
];

const buttonClasses = [
	'px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md',
	'px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md',
	'px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md',
	'px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md',
	'px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md',
	'px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md',
	'px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md',
	'px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md',
	'px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md',
];

const textClasses = [
	'text-xs font-light text-gray-100',
	'text-sm font-normal text-gray-200',
	'text-base font-medium text-gray-300',
	'text-lg font-semibold text-gray-400',
	'text-xl font-bold text-gray-500',
	'text-2xl font-light text-gray-600',
	'text-xs font-normal text-gray-700',
	'text-sm font-medium text-gray-800',
	'text-base font-semibold text-gray-900',
];

function ensureEmptyDir(dir) {
	fs.rmSync(dir, { recursive: true, force: true });
	fs.mkdirSync(dir, { recursive: true });
}

function pick(list, index) {
	return list[index % list.length];
}

function write(filePath, contents) {
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, contents);
}

ensureEmptyDir(SCREEN_DIR);
ensureEmptyDir(PALETTE_DIR);
ensureEmptyDir(COPY_DIR);
ensureEmptyDir(LAYOUT_DIR);

for (let index = 1; index <= SCREEN_COUNT; index += 1) {
	write(
		path.join(PALETTE_DIR, `palette${index}.ts`),
		`export const palette${index} = {
	name: 'palette-${index}',
	accent: '${pick(swatchClasses, index)}',
	button: '${pick(buttonClasses, index)}',
	text: '${pick(textClasses, index)}',
} as const;
`,
	);

	write(
		path.join(COPY_DIR, `copy${index}.ts`),
		`export const copy${index} = {
	title: 'Generated screen ${index}',
	detail: 'generic-module-${index}',
} as const;
`,
	);

	write(
		path.join(LAYOUT_DIR, `layout${index}.ts`),
		`export const layout${index} = {
	container: '${pick(containerClasses, index)}',
	rhythm: '${index % 2 === 0 ? 'gap-2' : 'gap-4'}',
} as const;
`,
	);

	write(
		path.join(SCREEN_DIR, `Screen${index}.tsx`),
		`import { Pressable, Text, View } from 'react-native';

import { copy${index} } from '../generated/copy/copy${index}';
import { layout${index} } from '../generated/layouts/layout${index}';
import { palette${index} } from '../generated/palettes/palette${index}';

export function Screen${index}() {
	return (
		<View className="${pick(containerClasses, index)}">
			<View className="${pick(swatchClasses, index)}" />
			<View className={layout${index}.rhythm} />
			<Pressable className="${pick(buttonClasses, index)}">
				<Text className="${pick(textClasses, index)}">{copy${index}.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy${index}.detail} / {palette${index}.name}
			</Text>
		</View>
	);
}
`,
	);
}

const imports = Array.from({ length: SCREEN_COUNT }, (_, i) => {
	const index = i + 1;
	return `import { Screen${index} } from './src/screens/Screen${index}';`;
}).join('\n');

const screenList = Array.from({ length: SCREEN_COUNT }, (_, i) => `Screen${i + 1}`).join(', ');

write(
	path.join(APP_DIR, 'App.tsx'),
	`import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text } from 'react-native';
import { Uniwind } from 'uniwind';

import { HeavyScreen } from './src/HeavyScreen';
${imports}

const screens = [${screenList}];

Uniwind.setTheme('purple-dark');

export default function App() {
	return (
		<ScrollView className="flex-1 bg-white p-4">
			<Text className="text-2xl font-bold text-gray-900">Uniwind CI repro</Text>
			<HeavyScreen />
			{screens.map((Screen, index) => (
				<Screen key={index} />
			))}
			<StatusBar style="auto" />
		</ScrollView>
	);
}
`,
);

console.log(`Generated ${SCREEN_COUNT} screens and ${SCREEN_COUNT * 3} helper modules.`);
