import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1179 } from '../generated/copy/copy1179';
import { layout1179 } from '../generated/layouts/layout1179';
import { palette1179 } from '../generated/palettes/palette1179';

const RuntimeView1179 = withUniwind(View);

export function Screen1179() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView1179 styleClassName={layout1179.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1179.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1179.detail} / {palette1179.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
