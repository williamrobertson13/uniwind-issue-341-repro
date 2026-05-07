import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy813 } from '../generated/copy/copy813';
import { layout813 } from '../generated/layouts/layout813';
import { palette813 } from '../generated/palettes/palette813';

const RuntimeView813 = withUniwind(View);

export function Screen813() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView813 styleClassName={layout813.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy813.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy813.detail} / {palette813.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
