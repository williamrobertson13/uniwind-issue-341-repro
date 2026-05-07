import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1081 } from '../generated/copy/copy1081';
import { layout1081 } from '../generated/layouts/layout1081';
import { palette1081 } from '../generated/palettes/palette1081';

const RuntimeView1081 = withUniwind(View);

export function Screen1081() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView1081 styleClassName={layout1081.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1081.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1081.detail} / {palette1081.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
