import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1139 } from '../generated/copy/copy1139';
import { layout1139 } from '../generated/layouts/layout1139';
import { palette1139 } from '../generated/palettes/palette1139';

const RuntimeView1139 = withUniwind(View);

export function Screen1139() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView1139 styleClassName={layout1139.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1139.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1139.detail} / {palette1139.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
