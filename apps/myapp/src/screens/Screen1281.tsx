import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1281 } from '../generated/copy/copy1281';
import { layout1281 } from '../generated/layouts/layout1281';
import { palette1281 } from '../generated/palettes/palette1281';

const RuntimeView1281 = withUniwind(View);

export function Screen1281() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView1281 styleClassName={layout1281.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy1281.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1281.detail} / {palette1281.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
