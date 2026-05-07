import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1375 } from '../generated/copy/copy1375';
import { layout1375 } from '../generated/layouts/layout1375';
import { palette1375 } from '../generated/palettes/palette1375';

const RuntimeView1375 = withUniwind(View);

export function Screen1375() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView1375 styleClassName={layout1375.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1375.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1375.detail} / {palette1375.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
