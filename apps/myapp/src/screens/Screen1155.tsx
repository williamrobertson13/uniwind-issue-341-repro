import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1155 } from '../generated/copy/copy1155';
import { layout1155 } from '../generated/layouts/layout1155';
import { palette1155 } from '../generated/palettes/palette1155';

const RuntimeView1155 = withUniwind(View);

export function Screen1155() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView1155 styleClassName={layout1155.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy1155.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1155.detail} / {palette1155.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
