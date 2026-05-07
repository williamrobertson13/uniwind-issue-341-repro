import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1110 } from '../generated/copy/copy1110';
import { layout1110 } from '../generated/layouts/layout1110';
import { palette1110 } from '../generated/palettes/palette1110';

const RuntimeView1110 = withUniwind(View);

export function Screen1110() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView1110 styleClassName={layout1110.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy1110.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1110.detail} / {palette1110.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
