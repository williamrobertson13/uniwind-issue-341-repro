import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1071 } from '../generated/copy/copy1071';
import { layout1071 } from '../generated/layouts/layout1071';
import { palette1071 } from '../generated/palettes/palette1071';

const RuntimeView1071 = withUniwind(View);

export function Screen1071() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView1071 styleClassName={layout1071.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1071.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1071.detail} / {palette1071.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
