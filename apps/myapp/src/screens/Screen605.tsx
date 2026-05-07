import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy605 } from '../generated/copy/copy605';
import { layout605 } from '../generated/layouts/layout605';
import { palette605 } from '../generated/palettes/palette605';

const RuntimeView605 = withUniwind(View);

export function Screen605() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView605 styleClassName={layout605.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy605.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy605.detail} / {palette605.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
