import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1246 } from '../generated/copy/copy1246';
import { layout1246 } from '../generated/layouts/layout1246';
import { palette1246 } from '../generated/palettes/palette1246';

const RuntimeView1246 = withUniwind(View);

export function Screen1246() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView1246 styleClassName={layout1246.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy1246.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1246.detail} / {palette1246.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
