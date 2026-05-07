import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy425 } from '../generated/copy/copy425';
import { layout425 } from '../generated/layouts/layout425';
import { palette425 } from '../generated/palettes/palette425';

const RuntimeView425 = withUniwind(View);

export function Screen425() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView425 styleClassName={layout425.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy425.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy425.detail} / {palette425.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
