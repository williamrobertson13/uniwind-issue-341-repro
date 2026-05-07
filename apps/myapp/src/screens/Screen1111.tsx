import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1111 } from '../generated/copy/copy1111';
import { layout1111 } from '../generated/layouts/layout1111';
import { palette1111 } from '../generated/palettes/palette1111';

const RuntimeView1111 = withUniwind(View);

export function Screen1111() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView1111 styleClassName={layout1111.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy1111.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1111.detail} / {palette1111.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
