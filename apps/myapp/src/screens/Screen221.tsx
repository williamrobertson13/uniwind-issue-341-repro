import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy221 } from '../generated/copy/copy221';
import { layout221 } from '../generated/layouts/layout221';
import { palette221 } from '../generated/palettes/palette221';

const RuntimeView221 = withUniwind(View);

export function Screen221() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView221 styleClassName={layout221.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy221.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy221.detail} / {palette221.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
