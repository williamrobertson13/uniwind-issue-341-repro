import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1325 } from '../generated/copy/copy1325';
import { layout1325 } from '../generated/layouts/layout1325';
import { palette1325 } from '../generated/palettes/palette1325';

const RuntimeView1325 = withUniwind(View);

export function Screen1325() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView1325 styleClassName={layout1325.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1325.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1325.detail} / {palette1325.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
