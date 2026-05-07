import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1371 } from '../generated/copy/copy1371';
import { layout1371 } from '../generated/layouts/layout1371';
import { palette1371 } from '../generated/palettes/palette1371';

const RuntimeView1371 = withUniwind(View);

export function Screen1371() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView1371 styleClassName={layout1371.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy1371.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1371.detail} / {palette1371.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
