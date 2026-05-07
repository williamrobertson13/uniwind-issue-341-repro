import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1217 } from '../generated/copy/copy1217';
import { layout1217 } from '../generated/layouts/layout1217';
import { palette1217 } from '../generated/palettes/palette1217';

const RuntimeView1217 = withUniwind(View);

export function Screen1217() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView1217 styleClassName={layout1217.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1217.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1217.detail} / {palette1217.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
