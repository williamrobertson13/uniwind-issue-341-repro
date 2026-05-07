import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy997 } from '../generated/copy/copy997';
import { layout997 } from '../generated/layouts/layout997';
import { palette997 } from '../generated/palettes/palette997';

const RuntimeView997 = withUniwind(View);

export function Screen997() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView997 styleClassName={layout997.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy997.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy997.detail} / {palette997.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
