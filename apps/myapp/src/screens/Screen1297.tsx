import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1297 } from '../generated/copy/copy1297';
import { layout1297 } from '../generated/layouts/layout1297';
import { palette1297 } from '../generated/palettes/palette1297';

const RuntimeView1297 = withUniwind(View);

export function Screen1297() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView1297 styleClassName={layout1297.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1297.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1297.detail} / {palette1297.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
