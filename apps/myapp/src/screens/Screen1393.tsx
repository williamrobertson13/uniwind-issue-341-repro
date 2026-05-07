import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1393 } from '../generated/copy/copy1393';
import { layout1393 } from '../generated/layouts/layout1393';
import { palette1393 } from '../generated/palettes/palette1393';

const RuntimeView1393 = withUniwind(View);

export function Screen1393() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView1393 styleClassName={layout1393.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1393.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1393.detail} / {palette1393.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
