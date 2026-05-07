import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1109 } from '../generated/copy/copy1109';
import { layout1109 } from '../generated/layouts/layout1109';
import { palette1109 } from '../generated/palettes/palette1109';

const RuntimeView1109 = withUniwind(View);

export function Screen1109() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView1109 styleClassName={layout1109.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1109.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1109.detail} / {palette1109.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
