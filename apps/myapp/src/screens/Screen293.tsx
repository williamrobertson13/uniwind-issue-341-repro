import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy293 } from '../generated/copy/copy293';
import { layout293 } from '../generated/layouts/layout293';
import { palette293 } from '../generated/palettes/palette293';

const RuntimeView293 = withUniwind(View);

export function Screen293() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView293 styleClassName={layout293.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy293.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy293.detail} / {palette293.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
