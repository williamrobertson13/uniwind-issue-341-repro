import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1361 } from '../generated/copy/copy1361';
import { layout1361 } from '../generated/layouts/layout1361';
import { palette1361 } from '../generated/palettes/palette1361';

const RuntimeView1361 = withUniwind(View);

export function Screen1361() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView1361 styleClassName={layout1361.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1361.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1361.detail} / {palette1361.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
