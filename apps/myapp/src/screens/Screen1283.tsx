import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1283 } from '../generated/copy/copy1283';
import { layout1283 } from '../generated/layouts/layout1283';
import { palette1283 } from '../generated/palettes/palette1283';

const RuntimeView1283 = withUniwind(View);

export function Screen1283() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView1283 styleClassName={layout1283.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1283.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1283.detail} / {palette1283.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
