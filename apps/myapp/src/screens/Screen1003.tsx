import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1003 } from '../generated/copy/copy1003';
import { layout1003 } from '../generated/layouts/layout1003';
import { palette1003 } from '../generated/palettes/palette1003';

const RuntimeView1003 = withUniwind(View);

export function Screen1003() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView1003 styleClassName={layout1003.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy1003.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1003.detail} / {palette1003.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
