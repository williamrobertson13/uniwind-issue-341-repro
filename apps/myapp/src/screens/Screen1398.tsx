import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1398 } from '../generated/copy/copy1398';
import { layout1398 } from '../generated/layouts/layout1398';
import { palette1398 } from '../generated/palettes/palette1398';

const RuntimeView1398 = withUniwind(View);

export function Screen1398() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView1398 styleClassName={layout1398.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy1398.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1398.detail} / {palette1398.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
