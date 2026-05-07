import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1219 } from '../generated/copy/copy1219';
import { layout1219 } from '../generated/layouts/layout1219';
import { palette1219 } from '../generated/palettes/palette1219';

const RuntimeView1219 = withUniwind(View);

export function Screen1219() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView1219 styleClassName={layout1219.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy1219.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1219.detail} / {palette1219.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
