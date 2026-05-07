import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1351 } from '../generated/copy/copy1351';
import { layout1351 } from '../generated/layouts/layout1351';
import { palette1351 } from '../generated/palettes/palette1351';

const RuntimeView1351 = withUniwind(View);

export function Screen1351() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView1351 styleClassName={layout1351.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1351.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1351.detail} / {palette1351.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
