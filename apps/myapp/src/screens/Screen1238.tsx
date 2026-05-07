import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1238 } from '../generated/copy/copy1238';
import { layout1238 } from '../generated/layouts/layout1238';
import { palette1238 } from '../generated/palettes/palette1238';

const RuntimeView1238 = withUniwind(View);

export function Screen1238() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView1238 styleClassName={layout1238.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1238.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1238.detail} / {palette1238.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
