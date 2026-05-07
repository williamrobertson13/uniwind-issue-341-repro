import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1369 } from '../generated/copy/copy1369';
import { layout1369 } from '../generated/layouts/layout1369';
import { palette1369 } from '../generated/palettes/palette1369';

const RuntimeView1369 = withUniwind(View);

export function Screen1369() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView1369 styleClassName={layout1369.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1369.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1369.detail} / {palette1369.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
