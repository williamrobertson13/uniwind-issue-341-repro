import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1087 } from '../generated/copy/copy1087';
import { layout1087 } from '../generated/layouts/layout1087';
import { palette1087 } from '../generated/palettes/palette1087';

const RuntimeView1087 = withUniwind(View);

export function Screen1087() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView1087 styleClassName={layout1087.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1087.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1087.detail} / {palette1087.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
