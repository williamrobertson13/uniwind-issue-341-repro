import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy438 } from '../generated/copy/copy438';
import { layout438 } from '../generated/layouts/layout438';
import { palette438 } from '../generated/palettes/palette438';

const RuntimeView438 = withUniwind(View);

export function Screen438() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView438 styleClassName={layout438.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy438.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy438.detail} / {palette438.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
