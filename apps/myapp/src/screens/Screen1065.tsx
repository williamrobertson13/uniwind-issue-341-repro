import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1065 } from '../generated/copy/copy1065';
import { layout1065 } from '../generated/layouts/layout1065';
import { palette1065 } from '../generated/palettes/palette1065';

const RuntimeView1065 = withUniwind(View);

export function Screen1065() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView1065 styleClassName={layout1065.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy1065.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1065.detail} / {palette1065.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
