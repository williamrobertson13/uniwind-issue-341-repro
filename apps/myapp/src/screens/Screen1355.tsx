import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1355 } from '../generated/copy/copy1355';
import { layout1355 } from '../generated/layouts/layout1355';
import { palette1355 } from '../generated/palettes/palette1355';

const RuntimeView1355 = withUniwind(View);

export function Screen1355() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView1355 styleClassName={layout1355.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1355.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1355.detail} / {palette1355.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
