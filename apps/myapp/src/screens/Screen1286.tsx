import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1286 } from '../generated/copy/copy1286';
import { layout1286 } from '../generated/layouts/layout1286';
import { palette1286 } from '../generated/palettes/palette1286';

const RuntimeView1286 = withUniwind(View);

export function Screen1286() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView1286 styleClassName={layout1286.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1286.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1286.detail} / {palette1286.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
