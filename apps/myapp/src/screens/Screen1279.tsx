import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1279 } from '../generated/copy/copy1279';
import { layout1279 } from '../generated/layouts/layout1279';
import { palette1279 } from '../generated/palettes/palette1279';

const RuntimeView1279 = withUniwind(View);

export function Screen1279() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView1279 styleClassName={layout1279.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1279.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1279.detail} / {palette1279.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
