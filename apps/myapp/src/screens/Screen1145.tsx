import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1145 } from '../generated/copy/copy1145';
import { layout1145 } from '../generated/layouts/layout1145';
import { palette1145 } from '../generated/palettes/palette1145';

const RuntimeView1145 = withUniwind(View);

export function Screen1145() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView1145 styleClassName={layout1145.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1145.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1145.detail} / {palette1145.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
