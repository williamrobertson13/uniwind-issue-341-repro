import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1299 } from '../generated/copy/copy1299';
import { layout1299 } from '../generated/layouts/layout1299';
import { palette1299 } from '../generated/palettes/palette1299';

const RuntimeView1299 = withUniwind(View);

export function Screen1299() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView1299 styleClassName={layout1299.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy1299.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1299.detail} / {palette1299.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
