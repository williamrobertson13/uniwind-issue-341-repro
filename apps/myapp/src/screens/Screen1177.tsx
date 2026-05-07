import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1177 } from '../generated/copy/copy1177';
import { layout1177 } from '../generated/layouts/layout1177';
import { palette1177 } from '../generated/palettes/palette1177';

const RuntimeView1177 = withUniwind(View);

export function Screen1177() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView1177 styleClassName={layout1177.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1177.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1177.detail} / {palette1177.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
