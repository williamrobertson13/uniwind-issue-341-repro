import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1001 } from '../generated/copy/copy1001';
import { layout1001 } from '../generated/layouts/layout1001';
import { palette1001 } from '../generated/palettes/palette1001';

const RuntimeView1001 = withUniwind(View);

export function Screen1001() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView1001 styleClassName={layout1001.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1001.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1001.detail} / {palette1001.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
