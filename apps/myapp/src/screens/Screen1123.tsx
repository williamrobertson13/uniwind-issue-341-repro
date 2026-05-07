import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1123 } from '../generated/copy/copy1123';
import { layout1123 } from '../generated/layouts/layout1123';
import { palette1123 } from '../generated/palettes/palette1123';

const RuntimeView1123 = withUniwind(View);

export function Screen1123() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView1123 styleClassName={layout1123.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1123.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1123.detail} / {palette1123.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
