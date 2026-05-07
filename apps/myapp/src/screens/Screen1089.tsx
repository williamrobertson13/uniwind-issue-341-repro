import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1089 } from '../generated/copy/copy1089';
import { layout1089 } from '../generated/layouts/layout1089';
import { palette1089 } from '../generated/palettes/palette1089';

const RuntimeView1089 = withUniwind(View);

export function Screen1089() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView1089 styleClassName={layout1089.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1089.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1089.detail} / {palette1089.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
