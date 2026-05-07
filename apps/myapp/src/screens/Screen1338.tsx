import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1338 } from '../generated/copy/copy1338';
import { layout1338 } from '../generated/layouts/layout1338';
import { palette1338 } from '../generated/palettes/palette1338';

const RuntimeView1338 = withUniwind(View);

export function Screen1338() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView1338 styleClassName={layout1338.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1338.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1338.detail} / {palette1338.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
