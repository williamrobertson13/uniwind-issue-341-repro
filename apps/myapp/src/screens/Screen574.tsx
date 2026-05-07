import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy574 } from '../generated/copy/copy574';
import { layout574 } from '../generated/layouts/layout574';
import { palette574 } from '../generated/palettes/palette574';

const RuntimeView574 = withUniwind(View);

export function Screen574() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView574 styleClassName={layout574.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy574.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy574.detail} / {palette574.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
