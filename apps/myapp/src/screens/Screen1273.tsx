import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1273 } from '../generated/copy/copy1273';
import { layout1273 } from '../generated/layouts/layout1273';
import { palette1273 } from '../generated/palettes/palette1273';

const RuntimeView1273 = withUniwind(View);

export function Screen1273() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView1273 styleClassName={layout1273.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy1273.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1273.detail} / {palette1273.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
