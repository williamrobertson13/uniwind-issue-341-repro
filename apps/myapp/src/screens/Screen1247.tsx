import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1247 } from '../generated/copy/copy1247';
import { layout1247 } from '../generated/layouts/layout1247';
import { palette1247 } from '../generated/palettes/palette1247';

const RuntimeView1247 = withUniwind(View);

export function Screen1247() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView1247 styleClassName={layout1247.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1247.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1247.detail} / {palette1247.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
