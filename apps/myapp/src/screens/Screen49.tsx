import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy49 } from '../generated/copy/copy49';
import { layout49 } from '../generated/layouts/layout49';
import { palette49 } from '../generated/palettes/palette49';

const RuntimeView49 = withUniwind(View);

export function Screen49() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView49 styleClassName={layout49.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy49.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy49.detail} / {palette49.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
