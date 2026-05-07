import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy471 } from '../generated/copy/copy471';
import { layout471 } from '../generated/layouts/layout471';
import { palette471 } from '../generated/palettes/palette471';

const RuntimeView471 = withUniwind(View);

export function Screen471() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView471 styleClassName={layout471.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy471.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy471.detail} / {palette471.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
