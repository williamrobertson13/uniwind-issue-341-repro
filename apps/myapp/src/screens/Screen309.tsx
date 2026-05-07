import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy309 } from '../generated/copy/copy309';
import { layout309 } from '../generated/layouts/layout309';
import { palette309 } from '../generated/palettes/palette309';

const RuntimeView309 = withUniwind(View);

export function Screen309() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView309 styleClassName={layout309.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy309.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy309.detail} / {palette309.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
