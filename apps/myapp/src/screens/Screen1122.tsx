import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1122 } from '../generated/copy/copy1122';
import { layout1122 } from '../generated/layouts/layout1122';
import { palette1122 } from '../generated/palettes/palette1122';

const RuntimeView1122 = withUniwind(View);

export function Screen1122() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView1122 styleClassName={layout1122.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1122.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1122.detail} / {palette1122.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
