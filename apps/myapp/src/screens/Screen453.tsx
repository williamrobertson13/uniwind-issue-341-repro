import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy453 } from '../generated/copy/copy453';
import { layout453 } from '../generated/layouts/layout453';
import { palette453 } from '../generated/palettes/palette453';

const RuntimeView453 = withUniwind(View);

export function Screen453() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView453 styleClassName={layout453.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy453.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy453.detail} / {palette453.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
