import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1097 } from '../generated/copy/copy1097';
import { layout1097 } from '../generated/layouts/layout1097';
import { palette1097 } from '../generated/palettes/palette1097';

const RuntimeView1097 = withUniwind(View);

export function Screen1097() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView1097 styleClassName={layout1097.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1097.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1097.detail} / {palette1097.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
