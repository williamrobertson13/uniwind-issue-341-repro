import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy313 } from '../generated/copy/copy313';
import { layout313 } from '../generated/layouts/layout313';
import { palette313 } from '../generated/palettes/palette313';

const RuntimeView313 = withUniwind(View);

export function Screen313() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView313 styleClassName={layout313.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy313.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy313.detail} / {palette313.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
