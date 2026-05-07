import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy535 } from '../generated/copy/copy535';
import { layout535 } from '../generated/layouts/layout535';
import { palette535 } from '../generated/palettes/palette535';

const RuntimeView535 = withUniwind(View);

export function Screen535() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView535 styleClassName={layout535.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy535.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy535.detail} / {palette535.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
